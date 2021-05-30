interface MinecraftUser{
    expiresOn: string
    name: string
    uuid: string
}
export default function(props: MinecraftUser){
    return <>
        <p>{props.name}</p>
        <p>{props.uuid}</p>
        <p>{props.expiresOn}</p>
    
    </>
}