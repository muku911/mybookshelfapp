import React from 'react';

import studyTimeSVG from "../image/049-study-time.svg";
import openBookSVG from "../image/004-open-book.svg";
import bookSVG from "../image/001-book.svg";
import trashBinSGV from "../image/003-trash-bin.svg";

function ReadButton({ id, onMoveBook }) {
    return <button className="read-button" title="MAKE READING" onClick={() => onMoveBook(id, "read")} style={{ backgroundImage: `url(${openBookSVG})` }}></button>;
}

function FinishButton({ id, onMoveBook }) {
    return <button className="done-button" title="MAKE FINISH READ" onClick={() => onMoveBook(id, "finish")} style={{ backgroundImage: `url(${bookSVG})` }}></button>;
}

function UnreadButton({ id, onMoveBook }) {
    return <button className="unread-button" title="MAKE UNREAD" onClick={() => onMoveBook(id, "unread")} style={{ backgroundImage: `url(${studyTimeSVG})` }}></button>;
}

function DeleteButton({ id, onDelete }) {
    return <button className="delete-button" title="DELETE" onClick={() => onDelete(id)} style={{ backgroundImage: `url(${trashBinSGV})` }}></button>;
}

export { ReadButton, FinishButton, UnreadButton, DeleteButton };