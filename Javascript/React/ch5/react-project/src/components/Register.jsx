import { useState } from "react";

/*
 * 간단한 회원 가입폼
 *
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 *
 * 생각해야 될 부분( 유지보수를 위한 코드 작성 )
 * 1. state 로 회원 가입폼의 항목을 관리
 * 항목을 하나의 무언가로 관리하도록 하면....
 *    => state 정보를 객체로 관리
 *
 * 2. 각 항목(tag)의 value 를 event handler 를 이용해서
 * 초기화 => 통합 이벤트 핸들러
 *
 * 비슷한 기능을 하는 event handler 를 통합할 수 있는
 * 방법은...
 *
 */

const Register = () => {
  const [formData, setFormData] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={"이름"}
        ></input>
        {formData.name}
      </div>
      <div>
        <input
          name="birth"
          value={formData.birth}
          onChange={handleChange}
          type="date"
        ></input>
        {formData.birth}
      </div>
      <div>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {formData.country}
      </div>
      <div>
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
        {formData.bio}
      </div>
    </div>
  );

  /*    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder={"이름"}
        ></input>
        {name}
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date"></input>
        {birth}
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
    */
};

export default Register;
