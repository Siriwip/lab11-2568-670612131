import { useState } from "react";

export default function ModalRegister() {
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState(false);

  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState(false);

  const [plan, setPlan] = useState("");
  const [planError, setPlanError] = useState(false);

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);

  const [buyBottle, setBuyBottle] = useState(false);
  const [buyShoes, setBuyShoes] = useState(false);
  const [buyCap, setBuyCap] = useState(false);

  const [agree, setAgree] = useState(false);

  // input handlers
  const inputFnameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
    setFnameError(false);
  };
  const inputLnameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
    setLnameError(false);
  };
  const selectPlanOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(e.target.value);
    setPlanError(false);
  };
  const radioGenderMaleOnChange = () => {
    setGender("male");
    setGenderError(false);
  };
  const radioGenderFemaleOnChange = () => {
    setGender("female");
    setGenderError(false);
  };
  const cbBuyBottleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyBottle(e.target.checked);
  };
  const cbBuyShoesOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyShoes(e.target.checked);
  };
  const cbBuyCapOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyCap(e.target.checked);
  };
  const cbAgreeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  // compute price
  const computeTotalPayment = () => {
    let total = 0;
    if (plan === "funrun") total += 500;
    if (plan === "mini") total += 800;
    if (plan === "half") total += 1200;
    if (plan === "full") total += 1500;

    let extraTotal = 0;
    if (buyBottle) extraTotal += 200;
    if (buyShoes) extraTotal += 600;
    if (buyCap) extraTotal += 400;

    if (buyBottle && buyShoes && buyCap) {
      extraTotal *= 0.8; // ส่วนลด 20%
    }

    total += extraTotal;
    return total;
  };

  const registerBtnOnClick = () => {
    let valid = true;
    if (fname === "") {
      setFnameError(true);
      valid = false;
    }
    if (lname === "") {
      setLnameError(true);
      valid = false;
    }
    if (plan === "") {
      setPlanError(true);
      valid = false;
    }
    if (gender === "") {
      setGenderError(true);
      valid = false;
    }

    if (valid) {
      alert(
        `Registration complete. Please pay money for ${computeTotalPayment().toLocaleString()} THB.`
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="modalregister"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Register CMU Marathon 🏃‍♂️</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* First + Last name */}
            <div className="d-flex gap-2">
              <div>
                <label className="form-label">First name</label>
                <input
                  className={"form-control" + (fnameError ? " is-invalid" : "")}
                  onChange={inputFnameOnChange}
                  value={fname}
                />
                <div className="invalid-feedback">Invalid first name</div>
              </div>
              <div>
                <label className="form-label">Last name</label>
                <input
                  className={"form-control" + (lnameError ? " is-invalid" : "")}
                  onChange={inputLnameOnChange}
                  value={lname}
                />
                <div className="invalid-feedback">Invalid last name</div>
              </div>
            </div>

            {/* Plan */}
            <div className="mt-2">
              <label className="form-label">Plan</label>
              <select
                className={"form-select" + (planError ? " is-invalid" : "")}
                onChange={selectPlanOnChange}
                value={plan}
              >
                <option value="">Please select..</option>
                <option value="funrun">Fun run 5.5 Km (500 THB)</option>
                <option value="mini">Mini Marathon 10 Km (800 THB)</option>
                <option value="half">Half Marathon 21 Km (1,200 THB)</option>
                <option value="full">
                  Full Marathon 42.195 Km (1,500 THB)
                </option>
              </select>
              <div className="invalid-feedback">Please select a Plan</div>
            </div>

            {/* Gender */}
            <div className="mt-2">
              <label className="form-label">Gender</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="radio"
                  onChange={radioGenderMaleOnChange}
                  checked={gender === "male"}
                />
                Male 👨
                <input
                  className="mx-2 form-check-input"
                  type="radio"
                  onChange={radioGenderFemaleOnChange}
                  checked={gender === "female"}
                />
                Female 👩
              </div>
              {genderError && (
                <div className="text-danger">Please select gender</div>
              )}
            </div>

            {/* Extra items */}
            <div className="mt-2">
              <label className="form-label">Extra Item(s)</label>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyBottleOnChange}
                  checked={buyBottle}
                />
                <label className="form-check-label">Bottle 🍼 (200 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyShoesOnChange}
                  checked={buyShoes}
                />
                <label className="form-check-label">Shoes 👟 (600 THB)</label>
              </div>
              <div>
                <input
                  className="me-2 form-check-input"
                  type="checkbox"
                  onChange={cbBuyCapOnChange}
                  checked={buyCap}
                />
                <label className="form-check-label">Cap 🧢 (400 THB)</label>
              </div>
            </div>

            <div className="alert alert-primary mt-3" role="alert">
              Promotion📢 Buy all items to get 20% Discount
            </div>

            {/* Total Payment */}
            <div>
              Total Payment : {computeTotalPayment().toLocaleString()} THB
              {buyBottle && buyShoes && buyCap && (
                <span className="text-success d-block">(20% Discounted)</span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer d-flex flex-column align-items-start">
            <div>
              <input
                className="me-2 form-check-input"
                type="checkbox"
                checked={agree}
                onChange={cbAgreeOnChange}
              />
              I agree to the terms and conditions
            </div>
            <button
              className="btn btn-success my-2"
              onClick={registerBtnOnClick}
              disabled={!agree}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
