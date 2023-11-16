export const generateStaticParams = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const coders = await response.json();

        return coders.map((coder) => ({
            id: coder.id.toString(),
        }));
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu: ", error);
        return { paths: [], fallback: false };
    }
}

async function getPost (params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    return data;
}
export default async function UserDetail({ params }) {
    const data = await getPost(params);
    return (
        <>
            <p>Name: {data?.name}</p>
            <p>Email: {data?.email}</p>
        </>
    )
}