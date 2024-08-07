import { useState, useEffect } from 'react';

import { generateClient } from '@aws-amplify/api';
import { getUrl, uploadData } from 'aws-amplify/storage';
//C:\Users\ttversky\pet-app\meco-app\src\graphql\queries.js
import * as queries from '../../graphql/queries';
import { createSighting } from '../../graphql/mutations';

import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {v4 as uuid} from 'uuid';
Amplify.configure(config);
const client = generateClient({authMode: 'userPool'});

function SightingForm() {
    
    const [Pic, setPic] = useState("");
    const [PicPath, setPicPaths] = useState([]);
    const [sightings, setSightings] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        speciesCommonName: "",
        speciesScienceName: "",
        site: "",
        latitude: "",
        longitude: "",
        count: "",
        stage: "",
        sex: "",
        condition: "",
        length: "",
        width: "",
        weight: "",
        diskLength: "",
        depth: "",
        distance: "",
        temperature: "",
        substrate: "",
        mediaURL: "",
        mediaSource: "",
        photographer: "",
    });

    const getsightings = async() => {
        try {
            const sightingsData = await client.graphql({query: queries.listSightings});
            console.log(sightingsData);

            const sightingsList = sightingsData.data.listSightings.items;
            setSightings(sightingsList);

            sightings.map(async (sighting, indx) => {
                const sightingPicPath = sightings[indx].PicPath;
                try {
                    const sightingPicPathURI = await getUrl({key: sightingPicPath, options: {validateObjectExistence: true, expires: 60}});
                    setPicPaths([...sightingPicPath, sightingPicPathURI]);
                } catch(err) {
                    console.log('error', err);
                }
            });
        } catch(err) {
            console.log('error', err);
        }
    }

    useEffect(() => {
        getsightings()
    }, []);

    const addNewSighting = async () => {
        try {
            const {
                date,
                time,
                speciesCommonName,
                speciesScienceName,
                site,
                latitude,
                longitude,
                count,
                stage,
                sex,
                condition,
                length,
                width,
                weight,
                diskLength,
                depth,
                distance,
                temperature,
                substrate,
                mediaURL,
                mediaSource,
                photographer 
            } = formData;

            // Upload pic to S3
            //Storage.configure({ region: 'eu-north-1'});
            const key = await uploadData({path: `${uuid()}.png`, data: Pic, options: {contentType: 'image/png'}});

            const newsighting = {
                id: uuid(),
                date,
                time,
                speciesCommonName,
                speciesScienceName,
                site,
                latitude,
                longitude,
                count,
                stage,
                sex,
                condition,
                length,
                width,
                weight,
                diskLength,
                depth,
                distance,
                temperature,
                substrate,
                mediaURL,
                mediaSource,
                photographer,
                PicPath: key
            };

            // Persist new Contact
            await client.graphql({query: createSighting, variables: {input: newsighting}});
        } catch(err) {
            console.log('error', err);
        }
    }

    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Sightings</h1></Col>
            </Row>
            <Row>
                lalala
            </Row>
            <Row className="px-4 my-5">
                <Col sm={3}>
                    <h2>Add New Sighting</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>date</Form.Label>
                            <Form.Control type="date" name="date" value={formData.date} 
                            onChange={evt => setFormData({...formData, date:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" name="time" value={formData.time} 
                            onChange={evt => setFormData({...formData, time:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Common Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter common name" name="speciesCommonName" value={formData.speciesCommonName} 
                            onChange={evt => setFormData({...formData, speciesCommonName:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Scientific Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter scientific name" name="speciesScienceName" value={formData.speciesScienceName} 
                            onChange={evt => setFormData({...formData, speciesScienceName:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Site</Form.Label>
                            <Form.Control type="text" placeholder="Enter site location" name="site" value={formData.site} 
                            onChange={evt => setFormData({...formData, site:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="text" placeholder="Enter latitude" name="latitude" value={formData.latitude} 
                            onChange={evt => setFormData({...formData, latitude:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="text" placeholder="Enter longitude" name="longitude" value={formData.longitude} 
                            onChange={evt => setFormData({...formData, longitude:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label>Count</Form.Label>
                            <Form.Control type="number" placeholder="Enter count" name="count" value={formData.count} 
                            onChange={evt => setFormData({...formData, count:evt.target.value})} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                        <Form.Label>Stage</Form.Label>
                        <Form.Control type="text" placeholder="Enter stage" name="stage" value={formData.stage} 
                        onChange={evt => setFormData({...formData, stage:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sex</Form.Label>
                        <Form.Control type="text" placeholder="Enter sex" name="sex" value={formData.sex} 
                        onChange={evt => setFormData({...formData, sex:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Condition</Form.Label>
                        <Form.Control type="text" placeholder="Enter condition" name="condition" value={formData.condition} 
                        onChange={evt => setFormData({...formData, condition:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Length</Form.Label>
                        <Form.Control type="number" placeholder="Enter length" name="length" value={formData.length} 
                        onChange={evt => setFormData({...formData, length:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Width</Form.Label>
                        <Form.Control type="number" placeholder="Enter width" name="width" value={formData.width} 
                        onChange={evt => setFormData({...formData, width:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number" placeholder="Enter weight" name="weight" value={formData.weight} 
                        onChange={evt => setFormData({...formData, weight:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Disk Length</Form.Label>
                        <Form.Control type="number" placeholder="Enter disk length" name="diskLength" value={formData.diskLength} 
                        onChange={evt => setFormData({...formData, diskLength:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Depth</Form.Label>
                        <Form.Control type="number" placeholder="Enter depth" name="depth" value={formData.depth} 
                        onChange={evt => setFormData({...formData, depth:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="number" placeholder="Enter distance" name="distance" value={formData.distance} 
                        onChange={evt => setFormData({...formData, distance:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Temperature</Form.Label>
                        <Form.Control type="number" placeholder="Enter temperature" name="temperature" value={formData.temperature} 
                        onChange={evt => setFormData({...formData, temperature:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Substrate</Form.Label>
                        <Form.Control type="text" placeholder="Enter substrate" name="substrate" value={formData.substrate} 
                        onChange={evt => setFormData({...formData, substrate:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Media URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter media URL" name="mediaURL" value={formData.mediaURL} 
                        onChange={evt => setFormData({...formData, mediaURL:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Media Source</Form.Label>
                        <Form.Control type="text" placeholder="Enter media source" name="mediaSource" value={formData.mediaSource} 
                        onChange={evt => setFormData({...formData, mediaSource:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Photographer</Form.Label>
                        <Form.Control type="text" placeholder="Enter photographer's name" name="photographer" value={formData.photographer} 
                        onChange={evt => setFormData({...formData, photographer:evt.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Media</Form.Label>
                        <Form.Control type="file" accept="image/png" onChange={evt => setPic(evt.target.files[0])}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={addNewSighting}>Submit &gt;&gt;</Button>&nbsp;   
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SightingForm;