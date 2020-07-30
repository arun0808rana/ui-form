import React, { useState } from 'react'
import { Form, Col, Row, Button, Container, Image } from 'react-bootstrap'
import useForm from "./useForm";
import validate from "./validateForm";
import './CustomForm.css'


function CustomForm() {
    const [songName, setSongName] = useState("Choose a song");
    // const [songFile, setSongFile] = useState("");

    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate
    );

    function submit() {
        console.log("Submitted Succesfully");
    }

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     let ageHandle = document.getElementById('ageID');
    //     let emailHandle = document.getElementById('emailID');
    //     let nameHandle = document.getElementById('nameID');
    //     let name = document.getElementById('nameID').value;

    //     let nameLength = name.split(' ').length;
    //     let fullnameRule = nameLength == 2
    //     let nameLengthRule = (name.split(' ')[0].length > 1) && (name.split(' ')[1].length > 1)

    //     //name validation
    //     if (fullnameRule && nameLengthRule) {
    //         nameHandle.style.border = '1px solid green';
    //         isValidated = true;
    //     }
    //     else {
    //         nameLengthErrMsg = true;
    //         nameHandle.style.border = '1px solid red';
    //         isValidated = false;
    //     }

    //     // age validation

    //     // email validation
    //     let email_regex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    //     if (!email_regex.test(emailHandle.value)) {
    //         emailErrMsg = false;
    //         emailHandle.style.border='1px solid red'
    //     }


    //     if (isValidated) {
    //         // submit form
    //     } else {
    //         event.preventDefault();
    //         return
    //     }

    //     let song = document.getElementById('songFileID');

    // }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setValues({ ...values, [name]: value })

    //     console.log(event.target.name)
    //     console.log(event.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const handleSongUploadPlaceholder = (e) => {
        console.log(e.target.files, 'song event')
        let audioTrack = e.target.files[0];
        if (!audioTrack)
            return

        let audioTrackName = audioTrack.name;
        setSongName(audioTrackName);

        let reader = new FileReader();
        reader.readAsDataURL(audioTrack);
        reader.onload = () => {
            console.log(reader.result);
            // setSongFile(reader.result)
        };

    }

    const handleFileUpload = (e) => {
        handleSongUploadPlaceholder(e);
        handleChange(e);
    }

    return (
        <Container className='d-flex align-items-center'>
            <Row className='sa m-auto'>
                <Col className='left-child' md={6}>
                    <div className='companyMotto'>
                        <div className='companyMascot mb-2'></div>
                        <div className='welcome text-center '>Welcome To</div>
                        <div className='companyName h5 text-center '>SongDew</div>
                    </div>
                </Col>

                <Col md={6} className="p-4 right-child">
                    <div className='cassette mb-3'></div>
                    <Form noValidate onSubmit={handleSubmit}>

                        <Form.Group controlId="nameID">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={values.name}
                                onChange={handleChange}
                                name="name" />
                            {errors.name && <p className="error">{errors.name}</p>}

                        </Form.Group>

                        <Form.Group controlId="ageID">
                            <Form.Control
                                type="number"
                                placeholder="Age"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={values.age}
                                onChange={handleChange}
                                name="age"
                            />
                            {errors.age && <p className="error">{errors.age}</p>}

                        </Form.Group>

                        <Form.Group controlId="emailID">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                className={errors.email && "inputError"}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                        </Form.Group>


                        <Form.File
                            id="songFileID"
                            label={songName}
                            custom
                            accept=".mp3,.flac,.wav"
                            required
                            name="song"
                            onChange={handleFileUpload}
                        />
                        {errors.song && <p className="error">{errors.song}</p>}


                        <div className='d-flex justify-content-end mt-3'>
                            <Button type="submit" className='py-1'>Join Us</Button>
                        </div>

                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default CustomForm
// <div className="input-group mb-2">
//         <div className="input-group-prepend">
//           <div className="input-group-text">@</div>
//         </div>
//         <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
//       </div>




// <form className="needs-validation" noValidate>
// <div className="form-group">
//     <input type="text" className="form-control" id="nameID" aria-describedby="name" placeholder="Name" />

//     <div className="invalid-feedback">
//     yttujtujjh!
//     </div>
// </div>

// <div className="form-group">
//     <input type="number" className="form-control" id="ageID" aria-describedby="age" placeholder="Age" />
// </div>

// <div className="form-group">
//     <input type="email" className="form-control" id="emailID" aria-describedby="email" placeholder="Email" />
// </div>

// <div className="input-group mb-3">
//     <div className="custom-file">
//         <input type="file" className="custom-file-input" id="inputGroupFile01"/>
//         <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Song</label>
//     </div>
// </div>

// <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
// </form>