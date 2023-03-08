import { SetStateAction, useEffect, useState } from "react";
import { ApiUtils } from "../../utils/ApiUtils";
import Repository from "../../components/repository/Repository";
import "./Projects.scss";

const Projects = (): JSX.Element => {
    const [ repoData, setRepoData ]: [JSON, React.Dispatch<SetStateAction<JSON>>] = useState(JSON);
    const [ loading, setLoading ]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState(true);
    const [ error, setError ]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState(false);

    useEffect((): void => {
        (async (): Promise<void> => {
            setLoading(true);
            setRepoData((await ApiUtils.getData("https://httpbin.org/status/500")));
        })()
            .catch((): void => setError(true))
            .then((): void => setLoading(false));
    }, []);

    return ( 
        <div id="Projects">
            { loading && 
            <div className="bg-loading">
                <div className="spinner-grow" role="status" />
            </div> 
            }
            { !loading && error &&
            <div className="error">
                <h1>Error</h1>
            </div>
            }
            { !loading && !error && 
            <div className="repositories">
                {
                JSON.parse(JSON.stringify(repoData)).map((repo: any): JSX.Element => (
                    <Repository data={repo} key={repo.id} />
                ))
                }
            </div>
            }
        </div>
    );
}

export default Projects;