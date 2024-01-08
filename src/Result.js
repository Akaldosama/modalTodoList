import React from "react";
import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./App.css";

export default function Result() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [open, setOpen] = useState([]);
  const [pending, setPending] = useState([]);
  const [inproge, setInproge] = useState([]);
  const [progress, setProgress] = useState([]);

  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const addTask = () => {
    if (select === "open") {
      open.push(input);
    } else if (select === "pending") {
      pending.push(input);
    } else if (select === "inproge") {
      inproge.push(input);
    } else if (select === "progress") {
      progress.push(input);
    }
    setOpen([...open]);
    setPending([...pending]);
    setInproge([...inproge]);
    setProgress([...progress]);

    setModal();
  };

  const editFunc = () => {
    setEditModal(true)
    setOpen([input])
  };

  // delete Functions
  const openDelFunc = (index) => {
    open.splice(index, 1);
    setOpen([...open]);
  };
  const pendingDelFunc = (index) => {
    pending.splice(index, 1);
    setPending([...pending]);
  };
  const inprogeDelFunc = (index) => {
    inproge.splice(index, 1);
    setInproge([...inproge]);
  };
  const progressDelFunc = (index) => {
    progress.splice(index, 1);
    setProgress([...progress]);
  };
  // ==================

  return (
    <div>
      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <ModalHeader>
          <h3>Add Panel</h3>
        </ModalHeader>
        <ModalBody>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" />
        </ModalBody>
        <ModalFooter>
          <button onClick={editFunc} className="btn btn-primary"> Add </button>
        </ModalFooter>
      </Modal>


      {/* Modal */}

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader>
          <h3>Add Panel</h3>
        </ModalHeader>
        <ModalBody>
          <input type="text" onChange={(e) => setInput(e.target.value)} className="form-control" />
          <br />
          <select onChange={(e) => setSelect(e.target.value)}className="form-control">
            <option value="" hidden> Select One </option>
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="inproge">Inproge</option>
            <option value="progress">Progress</option>
          </select>
        </ModalBody>
        <ModalFooter>
          <button onClick={addTask} className="btn btn-primary"> Add </button>
        </ModalFooter>
      </Modal>

      <div className="container">
        <div className="parent mt-5">
          <div className="card">
            <div className="card-header">Open</div>
            <div className="card-body">
              {open.map((item, index) => {
                return (
                  <span key={index}>
                    <p>{item}</p>
                    <button onClick={() => editFunc(index)} className="btn btn-success"> Edit </button>
                    <button onClick={openDelFunc} className="btn btn-danger"> 🗑 </button>
                  </span>
                );
              })}
            </div>
            <div className="card-footer">
              <button onClick={() => setModal(true)} className="btn btn-primary" > Add </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Pending</div>
            <div className="card-body">
              {pending.map((item, index) => {
                return (
                  <span key={index}>
                    <p>{item}</p>
                    <button onClick={editFunc} className="btn btn-success"> Edit </button>
                    <button onClick={pendingDelFunc} className="btn btn-danger"> 🗑 </button>
                  </span>
                );
              })}
            </div>
            <div className="card-footer">
              <button onClick={() => setModal(true)} className="btn btn-primary" > Add </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Inproge</div>
            <div className="card-body">
              {inproge.map((item, index) => {
                return (
                  <span key={index}>
                    <p>{item}</p>
                    <button onClick={editFunc} className="btn btn-success"> Edit </button>
                    <button onClick={inprogeDelFunc} className="btn btn-danger"> 🗑 </button>
                  </span>
                );
              })}
            </div>
            <div className="card-footer">
              <button onClick={() => setModal(true)} className="btn btn-primary" > Add </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Progress</div>
            <div className="card-body">
              {progress.map((item, index) => {
                return (
                  <span key={index}>
                    <p>{item}</p>
                    <button onClick={editFunc} className="btn btn-success"> Edit </button>
                    <button onClick={progressDelFunc} className="btn btn-danger" > 🗑 </button>
                  </span>
                );
              })}
            </div>
            <div className="card-footer">
              <button onClick={() => setModal(true)} className="btn btn-primary"> Add </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
