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
                <h2>Education</h2>
                {data.education.map((item) => (
                    <div key={item.id}>
                        <p>{item.school}</p>
                    </div>
                ))}
            </div>
            <div className="container work-exp">
                <h2>Work experience</h2>
            </div>
            <div className="container skills">
                <h2>Skills</h2>
            </div>
            <div className="container refs">
                <h2>References</h2>
            </div>
        </div>
    )
}

export default Cv;