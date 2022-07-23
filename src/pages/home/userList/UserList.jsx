import React from 'react';
import "./userList.css";
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../../dummyData";
import {Link} from "react-router-dom";


const UserList=() => {
    const columns=[
        {field: "id", headerName: "ID", width: 90},
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {field: "email", headerName: "Email", width: 200},
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            fieldfield: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"users/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="userListDelete" />
                    </>
                )
            }

        }
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={userRows}
                columns={columns}
                disableSelectionOnClick
                pageSize={4}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList