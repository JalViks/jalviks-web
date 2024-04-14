import React, { useState } from 'react';
import { Tab, Tabs, Table } from 'react-bootstrap';
// import './Tables.css'; // Import your CSS file for custom styles

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
    };

    return (
        <div className="container">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={handleTabChange}
                className="nav-pills" /* Add nav-pills class here */
            >
                <Tab eventKey="averageDeviation" title="Average Deviation">
                    <div className="table-responsive">
                        <Table striped bordered hover className="small-table">
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
                    </div>
                </Tab>
                <Tab eventKey="frequencyProbability" title="Frequency Probability">
                    <div className="table-responsive">
                        <Table striped bordered hover className="small-table">
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
                    </div>
                </Tab>
                <Tab eventKey="probabilityExceeding" title="Probability of Exceeding">
                    <div className="table-responsive">
                        <Table striped bordered hover className="small-table">
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
                    </div>
                </Tab>
                <Tab eventKey="last5Years" title="Last 5 Years">
                    <div className="table-responsive">
                        <Table striped bordered hover className="small-table">
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
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Tables;
