import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions/get-issues.action"
import { State } from "../interfaces"

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

const useIssues = ({state, selectedLabels}: UseIssuesProps) => {

  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ["issues", {state, selectedLabels, page}],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60
  })

  useEffect(() => {
    setPage(1)
  }, [state, selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) {
      return;
    }

    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) {
      return;
    }

    setPage((prevPage) => prevPage - 1)
  }

  return {
    issuesQuery,
    page,
    nextPage,
    prevPage
  }
}

export default useIssues