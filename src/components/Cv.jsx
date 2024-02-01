import "../styles/cv.css"

// output cv

function Cv({data}) {
    return (
        <div className="cv">
            <div className="container gen-info">
                <h2 className="name-heading">{data.generalInfo.name}</h2>
                <div className="contact-info">
                    <p>Email: {data.generalInfo.email}</p>
                    <p>Phone: {data.generalInfo.phone}</p>
                    <p>Location: {data.generalInfo.location}</p>
                </div>
            </div>
            <div className="container education">
                <div className="section-header">
                    <h3>Education</h3>
                </div>
                {data.education.map((item) => (
                    <div className="info-output" key={item.id}>
                        <div className="info-left">
                            <p>Date: {item.dates}</p>
                            <p>Location: {item.location}</p>
                        </div>
                        <div className="info-right">
                            <p>School: {item.school}</p>
                            <p>Subject: {item.subject}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container work-exp">
                <div className="section-header">
                    <h3>Work experience</h3>
                </div>
                {data.workExp.map((item) => (
                    <div className="info-output" key={item.id}>
                        <div className="info-left">
                            <p>Dates worked: {item.dates}</p>
                            <p>Location: {item.location}</p>
                        </div>
                        <div className="info-right">
                            <p>Company: {item.company}</p>
                            <p>Position: {item.subject}</p>
                            <p>Description: {item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container skills">
                <div className="section-header">
                    <h3>Skills</h3>
                </div>
                {data.skills.map((item) => (
                    <div className="info-output" key={item.id}>
                        <p>{item.skill}</p>                        
                    </div>
                ))}
            </div>
            <div className="container refs">
                <div className="section-header">
                    <h3>References</h3>
                </div>                    
                {data.references.map((item) => (
                    <div className="info-output" key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Position: {item.jobTitle}</p>
                        <p>Email: {item.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cv;