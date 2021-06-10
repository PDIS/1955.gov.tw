
// 表單欄位驗證
$(function () {
  $("#apply input[name='name']").on("blur", (event) => {
    if (!/^.{1,20}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("姓名應在20個字以內")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='birthday']").on("blur", (event) => {
    if (!/^[0-9]{3}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/.test(event.target.value) || !moment(event.target.value, "tYYMMDD").isValid()) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("生日須為民國年月日(YYYMMDD)格式")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='id']").on("blur", (event) => {
    if (!/^[A-Z][12][0-9]{8}$/.test(event.target.value)) {
      $(event.target).addClass("invalid").closest("td").find(".valid-hint").text("身份證字號格式錯誤")
    } else {
      $(event.target).removeClass("invalid").closest("td").find(".valid-hint").empty()
    }
  })

  $("#apply input[name='type']").on("change", (event) => {
    $("#apply input[name='branch'], #apply input[name='account']").blur()
  })

  // 選單
  $("#apply select[name='branch']").on("change", (event) => {

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
