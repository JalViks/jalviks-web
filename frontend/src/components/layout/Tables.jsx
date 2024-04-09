import React, { useState } from 'react';
import { Tab, Tabs, Table } from 'react-bootstrap';

export const Tables = () => {
    const [key, setKey] = useState('averageDeviation');

    const handleTabChange = (k) => {
        setKey(k);
    };

    // Dummy data for each row
    const data1 = [10, 12, 11, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    const data2 = [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];
    const data3 = [15, 17, 16, 19, 21, 23, 25, 27, 29, 31, 33, 35];

    // Render table rows based on the selected tab
    const renderRows = () => {
        if (key === 'averageDeviation') {
            return (
                <>
                    <tr>
                        <td>Data 1</td>
                        {data1.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 2</td>
                        {data2.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 3</td>
                        {data3.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                </>
            );
        } else if (key === 'frequencyProbability') {
            return (
                <>
                    <tr>
                        <td>Data 1</td>
                        {data1.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 2</td>
                        {data2.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 3</td>
                        {data3.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                </>
            );
        } else if (key === 'probabilityExceeding') {
            return (
                <>
                    <tr>
                        <td>Data 1</td>
                        {data1.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 2</td>
                        {data2.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 3</td>
                        {data3.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                </>
            );
        } else if (key === 'last5Years') {
            return (
                <>
                    <tr>
                        <td>last 5</td>
                        {data1.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 2</td>
                        {data2.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Data 3</td>
                        {data3.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                </>
            );
        }
    };

    return (
        <div className="container md-12">

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => handleTabChange(k)}
                className="mb-5"
            >
                <Tab eventKey="averageDeviation" title="Average Deviation">
                    <Table striped bordered hover className="custom-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>January</th>
                                <th>February</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>August</th>
                                <th>September</th>
                                <th>October</th>
                                <th>November</th>
                                <th>December</th>
                            </tr>
                        </thead>
                        <tbody >
                            {renderRows()}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="frequencyProbability" title="Frequency Probability">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>January</th>
                                <th>February</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>August</th>
                                <th>September</th>
                                <th>October</th>
                                <th>November</th>
                                <th>December</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="probabilityExceeding" title="Probability of Exceeding">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>January</th>
                                <th>February</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>August</th>
                                <th>September</th>
                                <th>October</th>
                                <th>November</th>
                                <th>December</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="last5Years" title="Last 5 Years">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>January</th>
                                <th>February</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>August</th>
                                <th>September</th>
                                <th>October</th>
                                <th>November</th>
                                <th>December</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Tables;
