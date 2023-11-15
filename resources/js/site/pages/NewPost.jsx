import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


import { CKEditor } from '@ckeditor/ckeditor5-react';

// NOTE: Use the editor from source (not a build)!
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Alignment } from '@ckeditor/ckeditor5-alignment'; 
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';


const editorConfiguration = {
    plugins: [ Essentials, Bold, Italic, Paragraph, BlockQuote, Link, List, Alignment, Heading, Autoformat ],
    toolbar: [ 'bold', 'italic', 'blockQuote', 'link', '|', 'heading', 'alignment', 'bulletedList',
    'numberedList', 'undo', 'redo'] 
};


import Footer from "../components/Footer";
import Header from "../components/Header";

const NewPost = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Header />
      <Container className='my-5'>
        <Row>
          <Col>
            <h3 className="fst-italic font-weight-bold my-5 pb-2 border-bottom text-center">Add new post</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Title"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a title.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Author"
                    defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a author.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>URL Image</Form.Label>
                  <Form.Control type="text" placeholder="Example: https://images.pexels.com/photos/18945830.png" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Image.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" className='d-none' placeholder="Content" defaultValue="Otto" required />
                    <CKEditor
                      editor={ ClassicEditor }
                      config={ editorConfiguration }
                      data="<p>Hello from CKEditor&nbsp;5!</p>"
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          // console.log( 'Editor is ready to use!', editor );
                          editor.editing.view.change((writer) => {
                            writer.setStyle(
                                "height",
                                "200px",
                                editor.editing.view.document.getRoot()
                            );
                          });
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          console.log({data})
                          // console.log( { event, editor, data } );
                      } }
                      onBlur={ ( event, editor ) => {
                          // console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          // console.log( 'Focus.', editor );
                      } }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid content.
                  </Form.Control.Feedback>
                </Form.Group>
                
              </Row>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default NewPost;