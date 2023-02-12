//지원 클릭 시 나타나는 지원정보 페이지
import React, {useRef, useState}  from "react";
import "./apply.css";

function ApplyInfo(){
        
        const [state,setState] = useState({
                author : "",
                phone: "",
                classnum : "",
                major : "",
                selectManage : "", 
        });
        const authorInput = useRef();
        const phoneInput = useRef();
        const classnumInput = useRef();
        const phoneSt = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //전화번호 기준

        const handleChange = (e)=>{ // 작성내용 객체에 저장 
                console.log(e.target.name);
                console.log(e.target.value);
                console.log(e.target.selectManage);

                setState({
                        ...state,
                        [e.target.name] : e.target.value,
                });
        };

        // 버튼 {지원하기} 
        function handleSubmit(){ 
                if(state.author ===""){
                        authorInput.current.focus();
                        alert("이름을 입력해주세요!")
                        return false;
                }
                if(!phoneSt.test(state.phone)){
                        phoneInput.current.focus();
                        alert("전화번호는 010-xxxx-xxxx 형태로 입력해주세요!")
                        return false;
                }

                if(state.classnum.length !== 7){
                        classnumInput.current.focus();
                        alert("학번 7자리를 맞춰서 작성해주세요! ")
                        return false;
                }


                //얘는 개인정보수정!!
                var isChecked = document.getElementById('checkAgree').checked;
                if(!isChecked){
                        alert("개인정보 수집에 동의해주세요!!");
                        return false;
                }

                //지원서 연결
                window.location.href = '../ApplyForm';        
}

return (
<div className= "ApplyInfo">
        <h2 style = {{ textAlign : "center",}}>EVI$ION<br/>2023-1 신입부원 모집</h2>

        <form>  
                <label>이화여자대학교 엘텍공과대학 사이버보안전공 과동아리 EVI$ION이 새로운 기수를 선발합니다!<br/>아래의 사항을 꼭 확인하시고 지원부탁드립니다.</label><br/>
                <label>✅지원 기간 :  2/25 ~ 3/1 </label><br/>
                <label>✅지원 조건 : 엘텍공과대학 소프트웨어학부 사이버보안전공 주전공/복수전공 및 진입예정자</label><br/>
                <label>✅테스트 일정 : 3/5 10:00~22:00 (12시간) 온라인 테스트 링크는 추후 공개(2023-1학기 ~ 2024-1학기) </label><br/>
                <label>✅지원 결과 : 3/7 이전 sms를 통해 공지됩니다.</label><br/>
                <label>✅전체세션 장소 : 이화여자대학교 교내 강의실(세부건물 및 호수는 미정)</label><br/>
                <label>✅전체세션 시간 : 목요일 오후 6시 반 ~ 오후 8시 반</label><br/>
                <label>✅동아리 OT : 3/9 오후 6시 30분~ [온라인]</label><br/>

                <label />성함을 입력해주세요
                <input 
                        ref = {authorInput}
                        name = "author"
                        value = {state.author}
                        onChange={handleChange} 
                        placeholder = "홍길동" ></input><br/>
                
                <label />전화번호를 입력해주세요
                <input 
                        ref = {phoneInput}
                        name = "phone" 
                        value = {state.phone} 
                        onChange={handleChange} 
                        placeholder = "010-xxxx-xxxx" ></input><br/>

                <label />학번을 입력해주세요
                <input 
                        ref = {classnumInput}
                        name = "classnum"
                        value = {state.classnum}
                        onChange = {handleChange}
                        placeholder = "2XXXXXX(7자리)"></input><br/>
                

                <label />전공을 입력해주세요
                <input 
                        name ="major"
                        value = {state.major}
                        onChange = {handleChange}
                        placeholder ="사이버보안"></input><br/>

                <label/>운영진 희망여부를 선택해주세요. 운영진을 희망하시는 경우 신입생 선발 시에 가산점이 부여될 예정입니다.
                <label><input 
                        type="radio" 
                        name="selectManage" 
                        value = {state.selectManage}
                        // checked={state.selectValue === "yes"} 
                        onChange={handleChange}/>예</label>
                <label><input 
                        type="radio" 
                        name="selectManage" 
                        value = {state.selectManage}
                        // checked={state.selectValue ==="no"}
                        onChange={handleChange}/>아니요</label>
                <br/>


                <label>개인정보 이용에 동의하시나요? 응답내용은 동아리 신입부원 선발을 위해서만 사용될 예정이며, 지원 종료 후 모든 정보는 폐기될 예정입니다.<br/></label>
                <p>1. 수집목적 : EVI$ION 신입부원 선발<br/>
                2. 수집항목 : 이름, 휴대폰 전화번호, 학번, 전공<br/>
                3. 보유 및 이용 기간 : 신입생 선발 후 OT까지 3/9</p>
                <label name = "checkout"><input type="checkbox" name = "isAgee" id= "checkAgree" value=""/> 개인정보 수집에 동의하시겠습니까? <br />
                </label><br />
        </form>

        <button onClick ={()=>{handleSubmit()}}>지원하기</button>
</div>
);
}

export default ApplyInfo;
