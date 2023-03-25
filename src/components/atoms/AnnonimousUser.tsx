import React from "react";

const AnnonimousUser = ({ 
  setUserInfo,
  handleChangeUser,
  data,
  handleSubmit,
  disable
}: any) => {
  return (
    <div className="formAnnoimouseUSer">
      <div>
        <label>Nombre</label>
        <input 
            value={data.firstName}
            name="firstName" onChange={handleChangeUser} 
            placeholder="Nombre" 
            type="text"
            required
          />
      </div>
      <div>
        <label>Apellidos</label>
        <input
          value={data.lastName}
          name="lastName"
          onChange={handleChangeUser}
          placeholder="Apellidos"
          type="text"
        />
        </div>
      <div>
        <label>Genero</label>
        <input
          value={data.genre}
          name="genre"
          onChange={handleChangeUser}
          placeholder="Genero"
          type="text"
        />
      </div>
      <div>
        <label>Edad</label>
        <input
          value={data.age}
          name="age"
          onChange={handleChangeUser}
          placeholder="Edad"
          type="text"
        />
      </div>
      <div>
        <label>Correo</label>
        <input
          value={data.email}
          name="email"
          onChange={handleChangeUser}
          placeholder="Correo"
          type="email"
        />
      </div>
        <button
          onClick={() => setUserInfo(false)}
          disabled={disable}
          className={disable ? 'buttonPass' : 'buttonDisable'}
          >
            Continuar
        </button>
    </div>
  );
};

export default AnnonimousUser;
