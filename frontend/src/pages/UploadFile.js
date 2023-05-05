import { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:8080/file/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.error(error);

            });
    };


    return (

        <>
            <Card style={{
               textAlign:'center',
               marginTop:'10px',
               backgroundColor:'lightcyan'
                
            }}>
                <CardBody>
                   

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fileInput">Upload a file:</label>
                        <input
                            type="file"
                            id="fileInput"
                            onChange={handleFileChange}
                        />
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>

                </CardBody>


            </Card>

        </>

    )
}

export default UploadFile