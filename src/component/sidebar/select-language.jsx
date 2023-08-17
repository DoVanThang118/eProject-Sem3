



const SelectLanguage = ({select}) => {
    return (
        <select defaultValue={select}>
            <option value="all" disabled="disabled">Select District/District *</option>
            {/*<option value="all">All Language</option>*/}
            <option value="java">JAVA</option>
            <option value="php">PHP</option>
            <option value="html">HTML</option>
            <option value="python">PYTHON</option>
            <option value="javascript">JAVASCRIPT</option>
        </select>
    );
}
 
export default SelectLanguage;