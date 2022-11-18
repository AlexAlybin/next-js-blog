export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const paths = data.map((author: any) => {
        return {
            params: {id: author.id.toString()}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const data = await response.json();

    return {
        props: {
            author: data,
        }
    }
}

// @ts-ignore
const AuthorDetails = ({author}) => {
    const {address} = author;
    const {street = "", suit = "", city} = address;
    return (
        <div className={"not-found"}>
            <h1>Author: {author.name}</h1>
            <p>E-mail: {author.email}</p>
            <p>Website: {author.website}</p>
            <p>Address: {`${street} ${suit} ${city}`}</p>
        </div>
    )
}

export default AuthorDetails;