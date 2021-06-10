
// 表單欄位驗證
$(function () {
  $("#apply input[name='name']").val(sessionStorage.getItem("apply.name"))
  $("#apply input[name='birthday']").val(sessionStorage.getItem("apply.birthday"))
  $("#apply input[name='id']").val(sessionStorage.getItem("apply.id"))

  $("#apply input[name='name']").on("blur", (event) => {
    if (!/^.{1,20}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("姓名應在20個字以內")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
      sessionStorage.setItem("apply.name", event.target.value)
    }
  })

  $("#apply input[name='birthday']").on("blur", (event) => {
    if (!/^[0-9]{3}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/.test(event.target.value) || !moment(event.target.value, "tYYMMDD").isValid()) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("生日須為民國年月日(YYYMMDD)格式")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
      sessionStorage.setItem("apply.birthday", event.target.value)
    }
  })

  $("#apply input[name='id']").on("blur", (event) => {
    if (!/^[A-Z][12][0-9]{8}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("身份證字號格式錯誤")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
      sessionStorage.setItem("apply.id", event.target.value)
    }
  })

  $("#apply input[name='type']").on("change", (event) => {
    $("#apply input[name='branch'], #apply input[name='account']").blur()
  })

  // 選單
  $("#apply select[name='branch']").on("change", (event) => {
    // stub
  })

  // 自行輸入
  $("#apply input[name='branch']").on("blur", (event) => {
    if ($("#apply input[name='type']:checked").val() !== "3" && !/^[0-9]{3}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("金融機構代號應為3位數字")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='account']").on("blur", (event) => {
    if ($("#apply input[name='type']:checked").val() !== "3" && !/^[0-9]{8,14}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("金融帳戶應為14位以內數字")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='post']").on("blur", (event) => {
    if (!/^[0-9]{3,6}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("郵遞區號應為3至6位數字")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  // 選單
  $("#apply select[name='city']").on("change", (event) => {
    // stub
  })

  // 自行輸入
  $("#apply input[name='city']").on("blur", (event) => {
    if (!/^.+$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("此為必填欄位")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  // 選單
  $("#apply select[name='district']").on("change", (event) => {
    // stub
  })

  // 自行輸入
  $("#apply input[name='district']").on("blur", (event) => {
    if (!/^.+$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("此為必填欄位")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='address']").on("blur", (event) => {
    if (!/^.+$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("此為必填欄位")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='mobile']").on("blur", (event) => {
    if (!/^09[0-9]{8}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("行動電話應為09開頭的10位數字")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='phone']").on("blur", (event) => {
    if (!/^(0[0-9]{5,9})?$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("市話應為包含區碼10位以內數字")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='datetime']").on("blur", (event) => {
    $(event.target).val(new Date().toISOString())
  })
})

/**
 * @typedef {Object} MeResponse 紓困補貼執行結果
 * @property {string} statusCode 狀態代碼
 * @property {string} message    執行結果訊息
 */
/**
 * @param {MeResponse} data 紓困補貼執行結果回應
 */
function resolveStatus(data) {
  switch (data.statusCode) {
    case "01": $(".msg1").show().siblings(".msg").hide(); break
    case "02": $(".msg2").show().siblings(".msg").hide(); window.location.href = "post.html"; break
    case "03": $(".msg3").show().siblings(".msg").hide(); break
    case "04": $(".msg4").show().siblings(".msg").hide(); break
    case "05": alert("紓困給付申請完成"); break
    case "81": alert("「市話」欄位應為包含區碼10位以內數字。"); break
    case "82": alert("「⾏動電話」欄位應為09開頭的10位數字。"); break
    case "83": alert("「郵遞區號」欄位應為3⾄6位數字。"); break
    case "84": alert("「⾦融帳⼾」欄位應為14位以內數字。"); break
    case "85": alert("「⾦融機構代號」欄位應為3位數字。"); break
    case "86": alert("「⾝份證字號」欄位格式錯誤。"); break
    case "87": alert("「⽣⽇」欄位為⺠國年⽉⽇(yyyMMdd)格式。"); break
    case "88": alert("「姓名」欄位應在20個字以內。"); break
    case "89": alert("請填寫「⾏動電話」欄位。"); break
    case "90": alert("請填寫「地址」欄位。"); break
    case "91": alert("請選擇「鄉鎮市區」欄位。"); break
    case "92": alert("請選擇「縣市」欄位。"); break
    case "93": alert("請填寫「郵遞區號」欄位。"); break
    case "94": alert("請填寫「⾦融帳⼾」欄位。"); break
    case "95": alert("請填寫「⾦融機構代號」欄位。"); break
    case "96": alert("請填寫「⾝分證字號」欄位。"); break
    case "97": alert("請填寫「姓名」欄位。"); break
    case "98": alert("請填寫「出生年⽉⽇」欄位。"); break
    case "99": alert("系統忙錄中，請稍後再試。"); break
    default: alert("發生錯誤，請稍後再試。(1)"); break
  }

}