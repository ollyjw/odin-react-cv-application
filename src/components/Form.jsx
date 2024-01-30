import Section from "./Section";
import "../styles/form.css"

// Data entry structure

function Form({data, setData}) {
    return (
        <div className="form-container">
            <form onSubmit={e => e.preventDefault()}>
                <Section title={"General Information"} data={data} setData={setData} />
                <Section title={"Education"} data={data} setData={setData} />
                <Section title={"Work Experience"} data={data} setData={setData} />
                <Section title={"Skills"} data={data} setData={setData} />
                <Section title={"References"} data={data} setData={setData} />
            </form>
        </div>
    )
}

export default Form;