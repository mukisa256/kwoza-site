import "./folderStyle.css";

function FolderData(props){
    return(
        <div className="t-cards">
            <div className="t-image">
                <img alt="image" src={props.image}/>   
            </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
        </div>
    )
}
export default FolderData;