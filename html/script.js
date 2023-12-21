
//Клики одинарные
document.addEventListener('click', (e)=>{
    const admin = document.querySelector('h1').innerText.includes('Admin')
    //Закрытие вывода задачи
    if (e.target.closest('.closebtntask')) {
        SaveTask(false)
    }


    // if (e.target.closest('.bgtask') && !e.target.closest('.newtask')) {
    //     if (document.getElementById('files').dataset['files'] == '') {
    //         if (!confirm('Закрыть без сохранения?')){
    //             return
    //         }
    //     }
    //     if (document.querySelector('.block')) {document.querySelector('.block').classList.remove('block')} 
    //     document.querySelector('.bgtask').classList.remove('active')
    //     document.getElementById('files').dataset['files'] = ''
    //     // SaveTask()
    //     location.reload()
    // }



    //Удаление файла
    if (e.target.closest('.del')){
        let file = e.target.closest('.filedel')
        let id
        if (e.target.closest('tr')) id = e.target.closest('tr').dataset['id'] 
        else id = document.getElementById('files').dataset['files']
        if (confirm('Вы действительно хотите удалить файл - '+file.dataset['filename'])){
            DeleteFile(id,file)
        }
    }
    //Открытие комментариев
    if (e.target.closest('.comment')){
        let id = e.target.closest('tr').dataset['id']
        document.querySelector('#comments').dataset['id'] = id
        GetMessages(id)
        document.querySelector('.cbg').classList.add('active')
    }
    //Закрытие комментариев
    if (e.target.closest('.cbg') && !e.target.closest('.commentbox')) {
        document.querySelector('.cbg').classList.remove('active')
        location.hash=''
        CheckMsg()

    }
    //Закрытие редактирования пользователей
    if (e.target.closest('.bguser') && !e.target.closest('.newuser')) document.querySelector('.bguser').classList.remove('active')
    //Выделение строки при клике
    if (e.target.closest('tr')) {
        if (e.target.closest('tr').querySelector('td')){
            if(document.querySelector('.select')) {
                document.querySelector('.select').classList.remove('select')
            }
            e.target.closest('tr').classList.add('select')
        }
    }
    //Сортировка статуса
    if(e.target.closest('#checkboxes')){
        CheckboxSelect()
    }
    //Вывод картинки
    if (e.target.closest('.pimg')){
        let imgsrc = e.target.closest('.pimg').getAttribute('src')
        document.querySelector('.showpimg img').setAttribute('src',imgsrc)
        document.querySelector('.showpimg').style.display = 'flex'
    }
    if (e.target.closest('.showpimg')){document.querySelector('.showpimg').style.display = ''}
})
//Двойной клик по строке для измения задачи
if (document.querySelector('.table tbody'))
document.querySelector('.table tbody').addEventListener('dblclick',(e)=>{
    if (e.target.closest('tr').querySelector('td')) {
        let id = e.target.closest('tr').dataset['id']
        TaskBtn(id)
    }
})
//Выход пользователя
async function Logout(){
    let response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'text/html' },
        body: 'logout'
    });
    if (response.ok) {
        location.reload();
    }
}
//Открытие окна добавления/изменения задачи
function TaskBtn(id=0){
    let admin = document.querySelector('h1').innerText.includes('Admin')
    if (id != 0) document.querySelector('.h3').innerText = 'Task '+id
    let form = document.getElementById('newtask')
    let table = document.querySelector('.table')
    form.querySelector('.files').innerHTML = ''
    if (id==0) {
        form.reset()
        document.querySelector('.files').innerHTML = ''
        document.querySelector('#header').removeAttribute('disabled')
        document.querySelector('#description').removeAttribute('disabled')
    }
    else{
        if(!admin){
            document.querySelector('#header').style='pointer-event:none'
            document.querySelector('#description').style='pointer-event:none'
        }
        for (let i=0; i<table.rows.length; i++){
            if (table.rows[i].cells[0].innerText == id) {
                document.querySelector('.files').innerHTML = table.rows[i].cells[4].innerHTML
                form.elements['header'].value = table.rows[i].cells[1].innerText
                form.elements['description'].value = table.rows[i].cells[2].innerHTML
                document.getElementById('files').dataset['files'] = id
                if (admin) document.getElementById('status').value = table.rows[i].cells[5].dataset['statusid']
                form.elements['result'].value = table.rows[i].cells[6].innerHTML
                if (admin) form.elements['user'].value = table.rows[i].cells[7].dataset['userid']
                else {
                    //Запрет на изменение после завершения
                    if (table.rows[i].cells[5].innerText == 'done' || table.rows[i].cells[5].innerText == 'archive') {
                        document.querySelector('#newtask').classList.add('block')
                    }
                }
                document.querySelector('.backhead').innerText = table.rows[i].cells[1].innerText
                document.querySelector('.backdesc').innerHTML = table.rows[i].cells[2].innerHTML
                document.querySelector('.backres').innerHTML = table.rows[i].cells[6].innerHTML
                if(admin){
                    document.querySelector('.backuser').innerText = form.elements['user'].value
                    document.querySelector('.backstatus').innerText = form.elements['status'].value
                }
                continue;
            }
        }
    }
    document.querySelector('.bgtask').classList.add('active')
}
//Сохранение и добавление задачи
async function SaveTask(s = true){
    const admin = document.querySelector('h1').innerText.includes('Admin')
    const form = document.querySelector('#newtask')
    const id = document.getElementById('files').dataset['files']

    let text = 'LOGS:: '

    if(document.querySelector('.backhead').innerText != form.elements['header'].value) text += 'Заголовок изменен: '+form.elements['header'].value+'\n'
    if(document.querySelector('.backdesc').innerHTML != form.elements['description'].value) text += 'Описание изменено: '+form.elements['description'].value+'\n'
    if(document.querySelector('.backres').innerHTML != form.elements['result'].value) text += 'Результат изменен: '+form.elements['result'].value+'\n'
    if (admin && id != 0){
        if(document.querySelector('.backuser').innerText != form.elements['user'].value) text += 'Пользователь изменен на '+document.getElementById('user')[document.getElementById('user').selectedIndex].text+'\n'
        if(document.querySelector('.backstatus').innerText != form.elements['status'].value) text += 'Статус изменен на '+document.getElementById('status')[document.getElementById('status').value-1].text+'\n'
    }
  
    if (text == 'LOGS:: ') {
        document.getElementById('newtask').reset()
        document.querySelector('.bgtask').classList.remove('active')
        document.getElementById('files').dataset['files'] = ''
        location.reload()
        return

    } else {
        if (!s) {
            if ( !confirm('Выйти без сохранения?')) return
            else {
                document.getElementById('newtask').reset()
                document.querySelector('.bgtask').classList.remove('active')
                document.getElementById('files').dataset['files'] = ''
                location.reload()
                return 
            }
        }
    }
    
    if (form.elements['header'].value == '') form.elements['header'].classList.add('error')
    if (form.elements['description'].value == '')  form.elements['description'].classList.add('error')

    if (document.querySelector('.error')) {
        alert ('Заполните все необходимые поля')
        setTimeout(()=>{
           let er = document.querySelectorAll('.error')
           er.forEach((e)=>e.classList.remove('error'))
        },2000)
        return
    }


    let data = {}
    let filelist = document.querySelectorAll('#newtask .files .filedel')
    let files = []
    filelist.forEach((a)=>{files.push(a.dataset['filename'])})
    data['id'] = id
    data['header'] = form.elements['header'].value
    data['description'] = form.elements['description'].value
    data['files'] = files.join(', ')
    // console.log(data['files'])
    if (admin) data['status'] = (document.getElementById('status').value == '1' && form.elements['user'].value != '0') ? '2' : document.getElementById('status').value
    data['result'] = form.elements['result'].value ? form.elements['result'].value : ''
    if (admin) data['user'] = form.elements['user'].value
    data['text'] = text

    document.getElementById('saveTask').classList.add('noactive')
    document.getElementById('saveTask').value = 'Save....'
    let response = await fetch('/addtask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        document.getElementById('newtask').reset()
        document.querySelector('.bgtask').classList.remove('active')
        document.getElementById('files').dataset['files'] = ''
        document.getElementById('saveTask').value = 'Saved'
        location.reload();
    }
}
//Загрузка файлов
// document.getElementById("files").addEventListener("change", (e)=>{ReadFiles(e.target.files)});
async function UploadFiles(filelist, name){
    let id = document.getElementById('files').dataset['files']
    id = id == '' ? 0 : id

    let file = id+';'+name+';'+filelist
    let response = await fetch('/uploadfiles', {
        method: 'POST',
        headers: { 'Content-Type': 'text/html' },
        body: file
    });
    if (response.ok) {
        ShowFileUpload(id, await response.text())
    }
}
//Перевод в base64 всех файлов
function ReadFiles(input) {
    for (let i=0; i<input.length;i++){
        let file = input[i];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {UploadFiles(reader.result, file.name)}
        reader.onerror = function() {console.log(reader.error)}
    }
}
//Вывод сохраненного файла в поле с файлами
function ShowFileUpload(id,filename){
    const filelist = document.querySelector('.files')
    id = (id == 0) ? 'Temp': id
    let filehtml = `<span class="filedel" data-filename="${filename}">`
    if (filename.includes('.png') || filename.includes('.jpg') || filename.includes('.jpeg')){
        filehtml += `<img class="pimg" src="/files/${id}/${filename}">`
    }
    filehtml +=`<a href="/files/${id}/${filename}" download="${filename}">${filename}</a><span class=del>x</span></span>`
    if (filelist.innerHTML.includes(filehtml)) return
    filelist.innerHTML += filehtml
}
//Удаление файлов
async function DeleteFile(id,file){
    let data = {}
    data['id'] = id
    data['file'] = file.dataset['filename']
    let response = await fetch('/deletefiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        if (await response.text() == 'true') file.remove()
    }
}
//Скачивание файлов
function DownloadsFile(){
    let id = document.getElementById('files').dataset['files']
    let filelist = document.querySelectorAll('.files .filedel')
    filelist.forEach((a)=>{
            Download(id, a.dataset['filename']);
        })
}
function Download (id, filename) {
    let path = '/files/'+id+'/'+filename
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = path;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};
//Отправка сообщений на Enter
document.getElementById('text').addEventListener('keypress',(e)=>{
    if (e.which == 13 && !e.shiftKey) {
        if (document.getElementById('text').value != '') e.preventDefault(); SendMessage()
        
    }
})


//Отправка сообщений на Enter
// document.getElementById('newtask').addEventListener('keypress',(e)=>{
//     if (e.which == 13) {
//         e.preventDefault()
//         SaveTask()
//     }
// })


//Отправка сообщений
async function SendMessage(){
    // e.preventDefault();
    let data = {}
    data['id'] = document.querySelector('#comments').dataset['id']
    data['message'] = document.getElementById('text').value
    data['date'] = Date.now()
    let response = await fetch('/sendmessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        let _data = await response.text()
        if (_data == 'true') {
            document.querySelector('#text').value = ''
            GetMessages(document.querySelector('#comments').dataset['id'])
        }
    }
}
//Получение всех сообщений
async function GetMessages(id){
    let response = await fetch('/getmessages', {
        method: 'POST',
        headers: {'Content-Type': 'text/html'},
        body: id
    })
    if (response.ok) {
        let _data = JSON.parse(await response.text())
        const div = document.querySelector('.commenttext')
        let user = document.querySelector('.logout').innerText.trim() 
        div.innerHTML = ''
        if (_data != {}) {
            let key = Object.keys(_data)
            key = key.sort((a,b)=>a-b)
            for (let i=0; i<key.length; i++){
                const divm = document.createElement('div')
                if (_data[key[i]].user == user){divm.classList.add('author')}
                const span_a = document.createElement('span')
                if (_data[key[i]].message.includes('LOGS::')) {
                    divm.classList.add('logs')
                    span_a.innerHTML = "&#10002; "
                } else span_a.innerHTML = "&#9993; "
                span_a.innerHTML += _data[key[i]].user
                span_a.classList.add('user')
                divm.append(span_a)
                const span_d = document.createElement('span')
                let date = new Date(_data[key[i]].date)
                // console.log(date.toISOString())
                span_d.innerText = ' ('+date.toLocaleString()+'):'
                span_d.classList.add('date')
                divm.append(span_d)
                const span_m = document.createElement('span')
                span_m.innerText = _data[key[i]].message
                span_m.classList.add('message')
                divm.append(span_m)
                div.append(divm)
            }
        }
        document.getElementById('text').focus()
        div.scrollTop = div.scrollHeight;
    }
}
//Вставка скриншота
document.getElementById('clip').onpaste = function(pasteEvent) {
    // consider the first item (can be easily extended for multiple items)
    var item = pasteEvent.clipboardData.items[0];
	if (item.type.indexOf("image") === 0)
    {
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onload = function(event) {
			b64 = btoa(event.target.result);
			// document.querySelector(".clippicture").innerHTML += `<a href = "data:image/png;base64,${b64}" target=_blank><img src="data:image/png;base64,${b64}" class="pimg"></a>`;
            UploadFiles(`data:image/png;base64,${b64}`, 's'+Date.now()+'.png')
        };
        reader.readAsBinaryString(blob);
        // reader.readAsDataURL(blob);
    }
}
//Фильтр статусов
function CheckboxSelect(){
    const admin = document.querySelector('h1').innerText.includes('Admin')
    const selectstatus = document.querySelectorAll('input.checkbox:checked');
    const statusValues = Array.from(selectstatus).map(cb => cb.value);
    const table = document.querySelector(".table");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        if (td) {
            let status = td[5].dataset['statusid'];
            if (admin){
                let user = document.getElementById('userfilter').value;
                let users = td[7].dataset['userid'];
                if (statusValues.toString().includes(status) && (users == user || user == 'all')) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
                if (user) localStorage.setItem('usercheck',user)
            } else {
                if (statusValues.toString().includes(status)) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
            
        }
    }
}

//GETFiles
async function GetFILES(){
    const table = document.querySelectorAll('tbody tr') 
    let ids = []
    table.forEach((tr)=>{
        ids.push(Number(tr.dataset['id']))
    })

    let response = await fetch('/getfilestask', {
        method: 'POST',
        headers: {'Content-Type': 'text/html'},
        body: JSON.stringify(ids)
    })
    if (response.ok) {
        let data = JSON.parse(await response.text())
        for (let key in data){
            let filehtml = ''
            data[key].forEach((a)=>{
                filehtml += `<span class="filedel" data-filename="${a}">`
                if (a.includes('.png') || a.includes('.jpg') || a.includes('.jpeg')){
                    filehtml += `<img class="pimg" src="/files/${key}/${a}">`
                }
                filehtml +=`<a href="/files/${key}/${a}" download="${a}">${a}</a><span class=del>x</span></span>`
            })
            document.querySelector(`tr[data-id = \"${key}\"]`).cells[4].innerHTML = filehtml
        }
    }
}

//Получение новой задачи
async function GetNewTask(){
    let response = await fetch('/getnew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: 'new'
    })
    if (response.ok) {
        _data = await response.text()
        if (_data == '{}') {alert('Новых задач нет!'); return}
        location.reload()
    }
}
//Завершение выполнения задачи
async function DoneTask(){
    e.preventDefault();
    let id = document.getElementById('files').dataset['files']
    let response = await fetch('/donetask', {
        method: 'POST',
        headers: { 'Content-Type': 'text/html' },
        body: id
    })
    if (response.ok) {
        let _data = await response.text()
        if (_data == 'true') {
            location.reload()
        }
    }
}

//Открытие окна добавления/Изменения пользователя
function UserBtn(id=0){
    let form = document.getElementById('newuser')
    if (id==0) {form.reset()}
    document.querySelector('.bguser').classList.add('active')
}
//Сохранение и добавление пользователя
async function SaveUser(){
    let form = document.getElementById('newuser')
    if (form.elements['login'].value == '') form.elements['login'].classList.add('error')
    if (form.elements['password'].value == '' || form.elements['password2'].value != form.elements['password'].value) {
        form.elements['password'].classList.add('error')
        form.elements['password2'].classList.add('error')
    }
    if (document.querySelector('.error')) {
        alert ('Заполните все необходимые поля')
        setTimeout(()=>{
           let er = document.querySelectorAll('.error')
           er.forEach((e)=>e.classList.remove('error'))
        },2000)
        return
    }
    if (document.getElementById('user').innerHTML.includes(`>${form.elements['login'].value}<`)){
        if (!confirm('Такой пользователь существует! Хотите изменить его?')) return
    }

    let data = {}
    data['login'] = form.elements['login'].value
    data['password'] = form.elements['password'].value
    data['role'] = form.elements['role'].value
    data['name'] = form.elements['name'].value

    let response = await fetch('/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        document.getElementById('newuser').reset()
        location.reload();
    }
}


//Обработчик загрузки страницы
document.addEventListener('DOMContentLoaded', ()=>{
    const admin = document.querySelector('h1').innerText.includes('Admin')

    if (admin){
        //Фильтр пользователей
        document.getElementById('userfilter').addEventListener('change',CheckboxSelect)
        if (localStorage.getItem('usercheck')) document.getElementById('userfilter').value = localStorage.getItem('usercheck')
    }


    if (location.hash.includes('#c')){
        let id = location.hash.substring(2)
        document.querySelector('#comments button').dataset['id'] = id
        document.querySelector('.cbg').classList.add('active')
        GetMessages(id)
    }
    CheckboxSelect()
    GetFILES()
    CheckMsg()
    
})

//Drag and Drop
const dropArea = document.querySelector(".drag-image"),
dragText = dropArea.querySelector("span"),
button = dropArea.querySelector("button"),
input = document.getElementById("files");
button.onclick = (e)=>{e.preventDefault(); input.click();}
input.addEventListener("change", function(){
  let files = this.files;
  dropArea.classList.add("active");
  ReadFiles(files)
});
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
}); 
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
  let files = event.dataTransfer.files;
  ReadFiles(files)
});
//END Drag and Drop

//Получение сообщений
function CheckMsg(){
    let table = document.querySelectorAll('tbody tr')
    table.forEach(async (tr)=>{
        let response = await fetch('/checkmsg', {
            method: 'POST',
            headers: { 'Content-Type': 'text/html' },
            body: tr.dataset['id']
        })
        if (response.ok) {
            let _data = await response.text()
            let msgs = JSON.parse(_data)
            let user = document.querySelector('.logout').innerText.trim() 
            let tooltip = ''
            tr.querySelector('.comsum').innerText = msgs.length
            msgs = msgs.sort((a, b)=>{a.ID-b.ID})
            let i = msgs.length-1
            if (msgs[i].login != user && msgs[i].status == 1) {
                tr.querySelector('.comment').classList.add('new')
            } else {
                tr.querySelector('.comment').classList.remove('new')
            }
            while (msgs[i] != undefined && i>-1 && i>msgs.length-6){
                let dataformated = new Date(Number(msgs[i].date))
                let message = msgs[i].message.substr(0,100)
                tooltip = `${msgs[i].login}(${dataformated.toLocaleString()}) : ${message}\n`+tooltip
                i--
            }
            tr.querySelector('.comment').setAttribute('title',tooltip)
        }
    })

}