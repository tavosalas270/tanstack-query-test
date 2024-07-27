import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions/get-issues.action"
import { State } from "../interfaces"

interface UseIssuesProps {
  state: State
}

const useIssues = ({state}: UseIssuesProps) => {
  console.log(state)
  const issuesQuery = useQuery({
    queryKey: ["issues", state],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60
  })

  return {
    issuesQuery
  }
}

export default useIssues