import './Repository.scss';

// type RepositoryData = {

// }

type RespositoryProps = {
    data: any;
}

const Repository = ({ data }: RespositoryProps): JSX.Element => {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
}

export default Repository;