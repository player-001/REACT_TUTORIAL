import useFetch from "./UseFetch"
const FetchYogaData = () => {
    const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152')
    return (
        <>
        <h1>Yoga Benefits</h1>
           
        <ul className = "list_data_main">
            {
                data && data.map((item, index) => {
                    const block = (
                        <li key = {index} classsName = "list_data">
                            <h3>{item.name}</h3>
                            <p><strng>Benefits: </strng>{item.benefits}</p>
                            <p><strong>Time Duration: </strong>{item.time_duration}</p>
                        </li>
                    )
                    return block
                })
            }
                
        </ul>
        
        </>

    )
}
export default FetchYogaData