// Enter / update information here, create handler functions to update details on screen

function Section({ title, data, setData }) {
    
    // Gen info handlers
    //  - Only need one instance for general info - only ever one person
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

    // Education

    // Need to create new object array item for each school/workplace/skill/ref + update the id
    function addEducationSection() {
        const nextID = data.education.length;
        const newEductionObj = {...data.education, id: nextID };

        // Store a copy of all cv data in a new var & edit the chosen section
        const newData = {...data};
        newData.education.push(newEductionObj);

        // set data with new data copy
        setData(newData);
    }

    // target the id of array item (id starts at 0 so corresponds with index)
    function handleSchoolChange(e) {
        const targetId = e.target.id;
        const targetObj = data.education[targetId];

        // update school with input value
        targetObj.school = e.target.value;

        // store a copy of cvData & update object in education arr with the new input value
        const newData = {...data};
        newData.education[targetId] = targetObj;

        // set data with new data copy
        setData(newData);
    }

    function handleSubjectChange(e) {
        const targetId = e.target.id;
        const targetObj = data.education[targetId];

        targetObj.subject = e.target.value;

        const newData = {...data};
        newData.education[targetId] = targetObj;

        setData(newData);
    }

    function handleSchoolDatesChange(e) {
        const targetId = e.target.id;
        const targetObj = data.education[targetId];

        targetObj.dates = e.target.value;

        const newData = {...data};
        newData.education[targetId] = targetObj;

        setData(newData);
    }

    // WORKEXP

    function addWorkSection() {
        const nextID = data.workExp.length;
        const newWorkExpObj = {...data.workExp, id: nextID };

        const newData = {...data};
        newData.workExp.push(newWorkExpObj);

        setData(newData);
    }

    function handleCompanyChange(e) {
        const targetId = e.target.id;
        const targetObj = data.workExp[targetId];

        targetObj.company = e.target.value;

        const newData = {...data};
        newData.workExp[targetId] = targetObj;

        setData(newData);
    }

    function handlePositionChange(e) {
        const targetId = e.target.id;
        const targetObj = data.workExp[targetId];

        targetObj.position = e.target.value;

        const newData = {...data};
        newData.workExp[targetId] = targetObj;

        setData(newData);
    }

    function handleDescriptionChange(e) {
        const targetId = e.target.id;
        const targetObj = data.workExp[targetId];

        targetObj.description = e.target.value;

        const newData = {...data};
        newData.workExp[targetId] = targetObj;

        setData(newData);
    }

    function handleWorkDatesChange(e) {
        const targetId = e.target.id;
        const targetObj = data.workExp[targetId];

        targetObj.dates = e.target.value;

        const newData = {...data};
        newData.workExp[targetId] = targetObj;

        setData(newData);
    }

    // Skills
    function addSkillsSection() {
        const nextID = data.skills.length;
        const newSkillsObj = {...data.skills, id: nextID };

        const newData = {...data};
        newData.skills.push(newSkillsObj);

        setData(newData);
    }

    function handleSkillChange(e) {
        const targetId = e.target.id;
        const targetObj = data.skills[targetId];

        targetObj.skill = e.target.value;

        const newData = {...data};
        newData.skills[targetId] = targetObj;

        setData(newData);
    }

    // Refs
    function addRefSection() {
        const nextID = data.references.length;
        const newRefObj = {...data.references, id: nextID };

        const newData = {...data};
        newData.references.push(newRefObj);

        setData(newData);
    }

    function handleRefNameChange(e) {
        const targetId = e.target.id;
        const targetObj = data.references[targetId];

        targetObj.name = e.target.value;

        const newData = {...data};
        newData.references[targetId] = targetObj;

        setData(newData);
    }
    function handleRefJobChange(e) {
        const targetId = e.target.id;
        const targetObj = data.references[targetId];

        targetObj.jobTitle = e.target.value;

        const newData = {...data};
        newData.references[targetId] = targetObj;

        setData(newData);
    }
    function handleRefEmailChange(e) {
        const targetId = e.target.id;
        const targetObj = data.references[targetId];

        targetObj.email = e.target.value;

        const newData = {...data};
        newData.references[targetId] = targetObj;

        setData(newData);
    }

    if (title === "General Information") {
        return (           
            <div className="section gen-info-entry">
                <h2 className="form-heading">{title}</h2>
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
            <div className="section education-entry">
                <h2 className="form-heading">{title}</h2>
                {data.education.map((item) => {
                    return (
                        <div key={item.id}>
                            <label htmlFor="">School</label>
                            <div>
                                <input 
                                    type={"text"}
                                    value={item.school}
                                    onChange={handleSchoolChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Subject</label>
                                <input 
                                    type={"text"}
                                    value={item.subject}
                                    onChange={handleSubjectChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Dates</label>
                                <input 
                                    type={"text"}
                                    value={item.dates}
                                    onChange={handleSchoolDatesChange}
                                    id={item.id}
                                />
                            </div>
                        </div>
                    )
                })}
                <button className="submit-btn" onClick={addEducationSection}>Add education</button>
            </div>           
        )
    } else if (title === "Work Experience") {
        return (
            <>
            <div className="section work-entry">
                <h2 className="form-heading">{title}</h2>
                {data.workExp.map((item) => {
                    return (
                        <div key={item.id}>
                            <label htmlFor="">Company</label>
                            <div>
                                <input 
                                    type={"text"}
                                    value={item.school}
                                    onChange={handleCompanyChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Position</label>
                                <input 
                                    type={"text"}
                                    value={item.position}
                                    onChange={handlePositionChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Description</label>
                                <input 
                                    type={"text"}
                                    value={item.description}
                                    onChange={handleDescriptionChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Dates</label>
                                <input 
                                    type={"text"}
                                    value={item.dates}
                                    onChange={handleWorkDatesChange}
                                    id={item.id}
                                />
                            </div>
                        </div>
                    )
                })}
                <button className="submit-btn" onClick={addWorkSection}>Add work experience</button>
                </div>
            </>
        )
    } else if (title === "Skills") {
        return (
            <>
            <div className="section">
                <div className="skills-header">
                    <h2 className="form-heading">{title}</h2>
                </div>
                {data.skills.map((item) => {
                    return (
                        <div key={item.id}>        
                            <div>
                                <label htmlFor="">Skill</label>
                                <input 
                                    type={"text"}
                                    value={item.skill}
                                    onChange={handleSkillChange}
                                    id={item.id}
                                />
                            </div>
                        </div>
                    )
                })}
                <button className="submit-btn" onClick={addSkillsSection}>Add skill</button>
                </div>
            </>
        )
    } else if (title === "References") {
        return (
            <>
            <div className="section">
                <div className="references-header">
                    <h2 className="form-heading">{title}</h2>
                </div>
                {data.references.map((item) => {
                    return (
                        <div key={item.id}>
                            <label htmlFor="">Name</label>
                            <div>
                                <input 
                                    type={"text"}
                                    value={item.name}
                                    onChange={handleRefNameChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Job Title</label>
                                <input 
                                    type={"text"}
                                    value={item.jobTitle}
                                    onChange={handleRefJobChange}
                                    id={item.id}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Description</label>
                                <input 
                                    type={"text"}
                                    value={item.email}
                                    onChange={handleRefEmailChange}
                                    id={item.id}
                                />
                            </div>                            
                        </div>
                    )
                })}
                <button className="submit-btn" onClick={addRefSection}>Add reference</button>
                </div>
            </>
        )
    }
}

export default Section;