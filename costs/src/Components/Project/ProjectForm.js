function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Project name"></input>
            </div>
            <div>
                <input type="number" placeholder="Budget"></input>
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected >Select a category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project"></input>
            </div>
        </form>    
    )
}

export default ProjectForm