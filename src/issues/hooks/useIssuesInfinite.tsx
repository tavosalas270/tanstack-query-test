import { useInfiniteQuery } from "@tanstack/react-query"
import { getIssues } from "../actions/get-issues.action"
import { State } from "../interfaces"

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

const useIssuesInfinite = ({state, selectedLabels}: UseIssuesProps) => {

  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "infinite", {state, selectedLabels}],
    queryFn: ({pageParam, queryKey}) => {
      const [,,args] = queryKey;
      const {state, selectedLabels} = args as UseIssuesProps
      return getIssues(state, selectedLabels, pageParam)
    },
    staleTime: 1000 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined
  })

  return {
    issuesQuery
  }
}

export default useIssuesInfinite