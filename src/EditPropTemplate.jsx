import React from "react";

export default function EditPropTemplate(prop) {
  return (
    <>
      <div class="form-floating mb-3">
        <input
          type={prop.type}
          class="form-control"
          id="floatingInput"
          name={prop.name}
          value={prop.value}
          onChange={prop.onChange}
        />
        <label for="floatingInput">{prop.desc}</label>
      </div>
    </>
  );
}
