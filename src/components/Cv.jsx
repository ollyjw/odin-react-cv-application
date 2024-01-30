import "../styles/cv.css"

// output cv

function Cv({data}) {
    return (
        <div className="cv">
            <div className="container gen-info">
                <h2>{data.generalInfo.name}</h2>
                <p>Email: {data.generalInfo.email}</p>
                <p>Phone: {data.generalInfo.phone}</p>
            </div>
            <div className="container education">
                <div className="section-header">
                    <h3>Education</h3>
                </div>
                {data.education.map((item) => (
                    <div key={item.id}>
                        <p>School: {item.school}</p>
                        <p>Subject: {item.subject}</p>
                        <p>Date: {item.dates}</p>
                    </div>
                ))}
            </div>
            <div className="container work-exp">
                <div className="section-header">
                    <h3>Work experience</h3>
                </div>
                {data.workExp.map((item) => (
                    <div key={item.id}>
                        <p>Company: {item.company}</p>
                        <p>Position: {item.subject}</p>
                        <p>Description: {item.description}</p>
                        <p>Dates worked: {item.dates}</p>
                    </div>
                ))}
            </div>
            <div className="container skills">
                <div className="section-header">
                    <h3>Skills</h3>
                </div>
                {data.skills.map((item) => (
                    <div key={item.id}>
                        <p>{item.skill}</p>                        
                    </div>
                ))}
            </div>
            <div className="container refs">
                <div className="section-header">
                    <h3>References</h3>
                </div>                    
                {data.references.map((item) => (
                    <div key={item.id}>
                        <p>Company: {item.name}</p>
                        <p>Position: {item.jobTitle}</p>
                        <p>Description: {item.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cv;