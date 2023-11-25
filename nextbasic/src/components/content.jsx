export const Content = ({name, age, gender}) => {
    if (gender==="male") {
        return (
            <div className="bg-blue-200  text-blue-600">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
        
            </div>
            );
    }
    
    
    
    return (
    <div className="bg-rose-200  text-rose-700">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>

    </div>
    );
};