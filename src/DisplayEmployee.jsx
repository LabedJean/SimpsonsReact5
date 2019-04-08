import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            
            <ul>
                <div> Quote: {employee.quote}</div>
                <div>
                    Character : {employee.character}  
                </div>
                <img  src={employee.image}  alt="picture" />
                 
                <div>CharacterDirection: {employee.characterDirection}
                </div>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;
