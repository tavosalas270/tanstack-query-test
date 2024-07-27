import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions/get-issues.action"
import { State } from "../interfaces"

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

const useIssues = ({state, selectedLabels}: UseIssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", {state, selectedLabels}],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60
  })

  return {
    issuesQuery
  }
}

export default useIssues