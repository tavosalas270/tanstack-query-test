import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import useIssues from '../hooks/useIssues';
import { LoadingSpinner } from '../shared';
import { State } from '../interfaces';

export const ListView = () => {

  const [state, setState] = useState<State>(State.All);

  const {issuesQuery} = useIssues({
    state: state
  })

  const issues = issuesQuery.data ?? []

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          issuesQuery.isLoading ? <LoadingSpinner /> : <IssueList issues={issues} onStateChange={setState} state={state} />
        }
      </div>
      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
