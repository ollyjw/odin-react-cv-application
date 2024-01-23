// Enter / update information here, create handler functions to update details on screen

function Section({ title, data, setData }) {

    // Only need one instance for general info
    function handleNameChange(e) {
        setData({
            ...data,
            generalInfo: { ...data.generalInfo, name: e.target.value },
        });
    }

    function handleEmailChange(e) {
        setData({
            ...data,
            generalInfo: { ...data.generalInfo, email: e.target.value },            
        });
    }

    function handlePhoneChange(e) {
        setData({
            ...data,
            generalInfo: { ...data.generalInfo, phone: e.target.value },            
        });
    }

    // Need to create new object for each school/workplace/skill/ref...

    function handleSchoolChange(e) {
        // const newSchool = ;
        setData({
            ...data,
            education: { ...data.education, school: e.target.value },
        });
    }

    if (title === "General Information") {
        return (           
            <div className="container gen-info-entry">
                <h2>{title}</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text"
                        value={data.generalInfo.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="text"
                        value={data.generalInfo.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input 
                        type="text"
                        value={data.generalInfo.phone}
                        onChange={handlePhoneChange}
                    />
                </div>
            </div>
        )
    } else if (title === "Education") {
        return (            
            <div className="container education-entry">
                <h2>{title}</h2>
                <div>
                    <label htmlFor="">School</label>
                    <input 
                        type="text"
                        value={data.education.school}
                        onChange={handleSchoolChange}
                    />
                </div>
            </div>           
        )
    } else if (title === "Work Experience") {
        return (
            <>
                <h2>{title}</h2>
            </>
        )
    } else if (title === "Skills") {
        return (
            <>
                <h2>{title}</h2>
            </>
        )
    } else if (title === "References") {
        return (
            <>
                <h2>{title}</h2>
            </>
        )
    }
}

export default Section;