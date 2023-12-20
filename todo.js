const fs = require('fs')
const https = require('http')
const sqlite3 = require('sqlite3').verbose();

try {
    fs.accessSync( 'taskfiles/todo.db' , fs.constants.F_OK);
} catch (err) {
    //fs.mkdirSync('taskfiles');
    fs.copyFileSync('newadmin.db', './taskfiles/todo.db')
}







let db = new sqlite3.Database('./taskfiles/todo.db');
var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

//HTTP сервер и обработка событий
const requestListener = function (req, res) {
    if (req.method == 'GET'){
        const cookies = parseCookies(req);
        const hash = cookies.hash;
        if (req.url == '/'){
            res.writeHead(200, {'Content-Type': 'text/html'})
            GetHTML(hash,res)
        }
        if (req.url == '/styles.css'){
            res.writeHead(200, {'Content-Type': 'text/css'})
            let html = fs.readFileSync('./html/styles.css').toString()
            res.end(html)
        }
        if (req.url == '/script.js'){
            res.writeHead(200, {'Content-Type': 'text/javascript'})
            let html = fs.readFileSync('./html/script.js').toString()
            res.end(html)
        }
        if (req.url.startsWith('/files/')){
            DownloadFiles(req.url,res)
        }

        if (req.url.startsWith('/savedb')){
            SaveDB(hash,res)
        }

        
        return
    } //get

    if (req.method == 'POST'){
        const cookies = parseCookies(req);
        const hash = cookies.hash;
	 	let data = ''
        if (req.url == '/loaddb'){
            LoadDB(hash,req,res)
            return
        }
		req.on('data', function(chunk) {
			data += chunk
		})

		req.on('end', function() {
            //Вход в систему Login
			if (req.url == '/'){
                let user = JSON.parse(data)
                CheckLogin(user.login, user.password, res)
			}
            //Выход из системы Logout
            if (req.url == '/logout'){
                res.writeHead(200, {'Content-Type': 'text/html',"Set-Cookie": `hash=0; SameSite=Lax`})
                res.end('Logout');
			}
            //Добавление пользователя
            if (req.url == '/adduser'){
                NewUser(hash, data,res)
			}
            if (req.url == '/getusers'){
                GetUsers(hash,res)
            }
            //Добавление задачи
            if (req.url == '/addtask'){
                SaveTask(hash,data,res)
			}
            //Загрузка файлов
            if (req.url == '/uploadfiles'){
                UploadFiles(hash,data,res)
			}
            //Удаление файлов
            if (req.url == '/deletefiles'){
                DeleteFile(hash,data,res)
			}
            //Отправка сообщений
            if (req.url == '/sendmessage'){
                SendMessage(data,hash,res)
			}
            //Получение сообщений
            if (req.url == '/getmessages'){
                GetMessages(data,hash,res)
			}
            //Завершение задачи
            if (req.url == '/donetask'){
                DoneTask(data, hash, res)
            }
            //Получение списка файлов
            if (req.url == '/getfilestask'){
                GetFILES(data,res)
            }
            
		})
		return;
	 } //POST*/
}
//Парсинг cookie
function parseCookies (request) {
    const list = {};
    const cookieHeader = request.headers?.cookie;
    if (!cookieHeader) return list;
    cookieHeader.split(`;`).forEach(function(cookie) {
        let [ name, ...rest] = cookie.split(`=`);
        name = name?.trim();
        if (!name) return;
        const value = rest.join(`=`).trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });
    return list;
}
//Проверка пользователей
function CheckLogin(log, pass, res){
    let sql = `SELECT hash from users WHERE login = ? and password = ?`
    let hash = ''
    db.get(sql, [log,pass], (err, row) => {
		if (err) {
            ConsoleError(err)
			res.writeHead(200, {'Content-Type': 'text/html',"Set-Cookie": `hash=''; SameSite=Lax`})
            res.end('Logout');
            return
		}
        if (row == undefined){
            res.writeHead(200, {'Content-Type': 'text/html',"Set-Cookie": `hash=''; SameSite=Lax`})
            res.end('NO LOGIN');
            return
         }
        hash = row.hash
        res.writeHead(200, {'Content-Type': 'text/html',"Set-Cookie": `hash=${hash}; SameSite=Lax`})
        res.end('Login');
	});

}
//Проверка Hash и получение HTML
function GetHTML(hash, res) {
    let html = ''
    if (hash == undefined) {
        html = fs.readFileSync('./html/login.html').toString();
        res.end(html);
        return
    }
    let sql = `SELECT * from users`
    let role = 0
    let userID,login,name
    let _html = ''
    db.all(sql, [], (err, rows) => {
		if (err) {ConsoleError(err); role = 0}
        rows.forEach((row)=>{
            if (row.hash == hash){
                userID = row.ID
                login = row.login
                role = row.ID_role
                name = row.name
            }
            _html += `<option value="${row.ID}">${row.login}(${row.name})</option>`
        })
        switch (role) {
            case 1:                                         //Admin
                html = fs.readFileSync('./html/admin.html').toString();
                html = html.replace('<!--%USER%-->', login)
                html = html.replace('<!--%USERS%-->',_html)
                GetTable(userID,role,html,res)
                break;
            case 2:                                         //User
                GetNew(hash)
                html = fs.readFileSync('./html/user.html').toString();
                html = html.replace('<!--%USER%-->', login)
                GetTable(userID,role,html,res)
                break;
            default :
                html = fs.readFileSync('./html/login.html').toString();
                res.end(html)
                break;
        }
	});
}
//Скачивание файлов
function DownloadFiles(url, res){
    let id = url.slice(7, url.lastIndexOf('/'))
    let name = url.slice(url.lastIndexOf('/')+1)
    fs.readFile('taskfiles/'+id+'/'+name, function (error, data) {
        if (error) {
            res.statusCode = 404;
            res.end('Resourse not found!');
        } else {
            res.end(data);
            return
        }
    })
}
//Сохранение нового пользователя
function NewUser(hash,data,res){
    let user = JSON.parse(data)
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql =`SELECT ID_role FROM users WHERE hash = ?`
    db.get(sql, [hash], (err, row) => {
		if (err) {ConsoleError(err)}
        if (row.ID_role == 1){
            let login = user['login']
            let pass = user['password'] 
            let ID_role = user['role'] 
            let name = user['name'] 
            let hash = MD5(login+pass)
            let _sql = `INSERT INTO users(login,password,name,ID_role,hash) VALUES(?,?,?,?,?)`
            db.get(_sql, [login,pass,name,ID_role,hash], (err) => {
                if (err) {
                    return ConsoleError(err);
                }
                res.end('Saved');
                return
            });
        }
        res.end('Error'); 
        return;
    });
}
//Получение списка задач
function GetTable(userID,role,html,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql=`SELECT t.*, c.ID_user AS cIDuser, c.status AS cS, u.login, s.status,c.ID AS cID FROM tasks t 
    INNER JOIN status s ON s.ID = t.ID_status
    INNER JOIN users u ON t.ID_user = u.ID
    LEFT JOIN comments c ON t.ID=c.ID_tasks WHERE (c.ID = (SELECT MAX(ID) FROM comments WHERE ID_tasks = t.ID) OR c.ID IS NULL)`
    if (role == 2) sql+=` AND t.ID_user = ${userID}`

    db.all(sql, [], (err, rows) => {
        if (err) {ConsoleError(err); role = 1; return}
        let _html = ''
        rows.forEach((row)=>{
            let ID_task = row.ID
            let stat = ''
            if (row.cIDuser != userID && row.cS == 1) stat = ' new'
            let filehtml = ''
            _html += `<tr data-id="${ID_task}">
                <td>${ID_task}</td>
                <td>${row.header}</td>
                <td>${row.description}</td>
                <td><span class='comment${stat}'>&#9993;</span></td>
                <td>${filehtml}</td>
                <td data-statusid="${row.ID_status}" class="status${row.ID_status}">${row.status}</td>
                <td>${row.result}</td>`
            if (role == 1){
                _html += `<td data-userid="${row.ID_user}">${row.login}</td>`
            }
            _html += `</tr>`
        })
        html = html.replace('<!--%TABLE%-->', _html)
        res.end(html); 
        return; 
    });
}

// Получение массива файлов
function GetFILES(data, res){
    let _data = JSON.parse(data).join(',')
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
    let filejson = {}
    let _sql = `SELECT ID_tasks, filename FROM files WHERE ID_tasks IN (${_data})`
    db.all(_sql,[], (err, rows)=>{
        rows.forEach((row)=>{
            if (filejson[row.ID_tasks] == undefined) filejson[row.ID_tasks] = []
            filejson[row.ID_tasks].push(row.filename)
        })
        res.end(JSON.stringify(filejson))
    })
}

//Сохранение задачи
function SaveTask(hash,data,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let task = JSON.parse(data)
    let sql =`SELECT ID, ID_role FROM users WHERE hash = ?`
    let role, userID
    db.get(sql, [hash], (err, row) => {
		if (err) {ConsoleError(err); role = 0}
        if (row == undefined) {role = 0}
        else {
            userID = row.ID
            role = row.ID_role
        }
        if (role == 0){res.end('Error'); return }
        let id = task.id
        let header = task.header
        let description = task.description
        let ID_status = (role == 1) ? task.status : 3
        let result = task.result
        let ID_user = (role == 1) ? task.user : userID
        let files = task.files
        let msg = []
        let _sql = ''
        if (id == 0){
            _sql = `INSERT INTO tasks (header,description,ID_user,ID_status,result) VALUES(?,?,?,?,?)`
            msg = [header,description,ID_user,ID_status,result]
        } else {
            if (role == 1){
                _sql = `UPDATE tasks SET header=?,description=?,ID_user=?,ID_status=?,result=? WHERE ID = ?;`
                msg = [header,description,ID_user,ID_status,result,id] 
            } else{
                _sql = `UPDATE tasks SET result=? WHERE ID = ?;`
                msg = [result,id]
            }
        }
        db.get(_sql, msg, (err) => {
            if (err) {
                ConsoleError(err)
                res.end('Error');
                return
            }
            res.end('Saved');
            if (id == 0){
                let __sql = `SELECT MAX(ID) AS ID FROM tasks WHERE header = ? AND description =?`
                let _msg = [header, description]
                db.get(__sql, _msg, (err,row)=>{
                    if (err) {ConsoleError(err); return}
                    id = row.ID
                    let _files = files.split(', ')
                    if (_files.length>0 && _files[0]!=''){
                        let path = 'taskfiles/'+id
                        fs.mkdirSync(path);
                        for (let i=0; i<_files.length; i++){
			    fs.copyFile('taskfiles/Temp/'+_files[i], 'taskfiles/'+id+'/'+_files[i], err => {
                                if(err) throw err; // не удалось скопировать файл
                                fs.unlink('taskfiles/Temp/'+_files[i], (error) => {
                                    if (error) {/*ConsoleError(error); return*/} // если возникла ошибка 
                                });
                                sql = `INSERT INTO files (ID_tasks,filename) VALUES (?,?) `
                                msg = [id,_files[i]]
                                db.get(sql,msg,(err)=>{})
                             });
                        }
                    }
                    sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
                    const text = `LOGS:: Задача создана!`
                    msg = [id,hash,text,Date.now()]
                    db.get(sql,msg,(err)=>{ConsoleError(err)})
                })
                
            }
            if (task.text != 'LOGS:: '){
                let __sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
                let __msg = [id,hash,task.text,Date.now()]
                db.get(__sql,__msg,(err)=>{ConsoleError(err)})
            }
        });
    })
}
//Загрузка файлов
function UploadFiles(hash,data,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql =`SELECT ID, ID_role,login FROM users WHERE hash = ?`
    let userID, role, login
    db.all(sql, [hash], (err, rows) => {
        if (err) {ConsoleError(err); role = 0}
        if (rows.length<1) {role = 0}
        else {
            userID = rows[0].ID
            role = rows[0].ID_role
            login = rows[0].login
        }
        if (role == 0){res.end('Error'); return }

        let id = data.slice(0, data.indexOf(';'))
        data = data.slice(data.indexOf(';')+1)
        let name = data.slice(0, data.indexOf(';'))
        data = data.slice(data.indexOf(';')+1)

        if (role == 1) name = SaveFile(id,name,data,'admin')
        else name = SaveFile(id,name,data,login)
        if (name === 'error') return    
            
        res.end(name)

        sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
        const text = `LOGS:: Добавлен файл - ${name}`
        msg = [id,hash,text,Date.now()]
        db.get(sql,msg,(err)=>{ConsoleError(err)})
        sql = `INSERT INTO files (ID_tasks,filename) VALUES (?,?) `
        msg = [id,name]
        db.get(sql,msg,(err)=>{ConsoleError(err)})
    });
}
//Сохранение файлов
function SaveFile(id,name,data,user){
    name = (user == 'admin') ? name : user+'_'+name
    if (id==0){id = 'Temp'}
    const path = 'taskfiles/'+id
    try {
        fs.accessSync( 'taskfiles' , fs.constants.F_OK);
    } catch (err) {
        fs.mkdirSync('taskfiles');
    }
    try {
        fs.accessSync( path , fs.constants.F_OK);
    } catch (err) {
        fs.mkdirSync(path);
    }
    const imageBuffer = decodeBase64(data);
    // fs.writeFileSync(path+'/'+name, imageBuffer.data, function(err) {ConsoleError(err)});
    if (imageBuffer === 'error') return 'error'
    fs.writeFile(path+'/'+name, imageBuffer.data, function(err) {ConsoleError(err)});
    return name
}
//Декодирование файлов
function decodeBase64(dataString) {
    var matches = dataString.match(/^data:([A-Za-z0-9-+\/]+);base64,(.+)$/),
    response = {};
    if (!matches) return 'error'
    if (matches.length != 3) {
        return 'error';
    }
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
    return response;
}
//Удаление файла
function DeleteFile(hash,data,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql =`SELECT ID,ID_role,login FROM users WHERE hash = ?`
    let userID, role, login
    db.all(sql, [hash], (err, rows) => {
        if (err) {ConsoleError(err); role = 0}
        if (rows.length<1) {role = 0}
        else {
            userID = rows[0].ID
            role = rows[0].ID_role
            login = rows[0].login
        }
        if (role == 0){res.end('Error'); return }
        const file = JSON.parse(data)
        const path = (file['id'] == 0) ? 'taskfiles/Temp/' : `taskfiles/${file['id']}/`
        if (file['file'].startsWith(login+'_') || role == 1) {
            fs.unlink(path+file['file'], (error) => {
                if (error) {/*ConsoleError(error);*/ res.end('Error');} // если возникла ошибка
                if (file['id'] != 0){
                    sql = `DELETE FROM files WHERE ID_tasks=? AND filename = ?;`
                    msg = [file['id'],file['file']]
                    db.get(sql,msg,(err)=>{ConsoleError(err)})
                    sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
                    const text = `LOGS:: Удален файл - ${file['file']}`
                    msg = [file['id'],hash,text,Date.now()]
                    db.get(sql,msg,(err)=>{ConsoleError(err)})
                }
                 
              });
            res.end('true')
        } else {res.end('Error')}
    })
}
//Получение следующей задачи для пользователя
function GetNew(hash){
    let _sql = `SELECT min(ID) AS id FROM tasks 
    WHERE ID_user = (SELECT ID FROM users WHERE hash = ?) AND ID_status = 2
    AND (SELECT count(ID) FROM tasks WHERE ID_status=3 AND ID_user = (SELECT ID FROM users WHERE hash = ?)) = 0`
    db.get(_sql, [hash,hash], (err,row) => {
        if (err) {ConsoleError(err); return}
        if (row.id === null) return
        let taskid = row.id
        let sql = `UPDATE tasks SET ID_status = 3 WHERE ID = ?`
        db.get(sql, [taskid], (err) => {
            if (err) {ConsoleError(err); return}
            let __sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
            const text = `LOGS:: Задача принята в работу`
            let _msg = [taskid,hash,text,Date.now()]
            db.get(__sql,_msg,(err)=>{ConsoleError(err)}) 
        })
    })

}
//Отправка сообщений
function SendMessage(data, hash, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let _data = JSON.parse(data)      //_data['message'] , _data['date'] , _data['id']
    if (_data['message'] == '') {res.end('Error'); return}
    let _sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
        msg = [_data['id'],hash,_data['message'],_data['date']]
        db.get(_sql,msg, (err)=>{
            if (err) {ConsoleError(err); res.end('Error'); return}
        })
        res.end('true')
        return
}
//Получение сообщений
function GetMessages(taskid,hash,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql = `SELECT a.*, b.login, b.name, c.id AS currentUser FROM comments a 
        INNER JOIN users b ON b.ID = a.ID_user 
        INNER JOIN users c WHERE a.ID_tasks =? AND c.hash = ?`
    let mjson = {}
    let currentUser
    db.all(sql,[Number(taskid),hash],(err,rows)=>{
        if (err) {ConsoleError(err); res.end('{}');return}
        let i = 0
        rows.forEach((row)=>{
            let json = {}
            json['commentID'] = row.ID
            json['user'] = row.login
            json['message'] = row.message
            json['date'] = row.date
            json['status'] = row.status
            json['userID'] = row.ID_user
            json['name'] = row.name
            i++
            mjson[i] = json 
            currentUser = row.currentUser
        })
        res.end(JSON.stringify(mjson))
        if (i>0){
                if (currentUser != mjson[i].userID && mjson[i].status == 1){
                let _sql = `UPDATE comments SET status = 0 where ID = ?`
                db.get(_sql,[Number(mjson[i].commentID)], (err)=>{
                    if (err) ConsoleError(err)
                })
            }
        }
    })
}
//Завершение выполнения задачи
function DoneTask(data, hash, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    let sql = `UPDATE tasks SET ID_status = 4 where ID = ? AND ID_user = (SELECT ID FROM users WHERE hash = ?)`
    db.get(sql, [data,hash], (err) => {
        if (err) {ConsoleError(err); res.end('Error');return}
        GetNew(hash)
        let __sql = `INSERT INTO comments (ID_tasks,ID_user,message,date,status) VALUES(?,(SELECT ID FROM users WHERE hash=?),?,?,1);`
        const text = `LOGS:: Статус изменен на Done`
        let _msg = [data,hash,text,Date.now()]
        db.get(__sql,_msg,(err)=>{ConsoleError(err)}) 
        res.end('true')
        return
    })
}

const options = {
    key: fs.readFileSync(
        'html/key.pem'
    ),
    cert: fs.readFileSync(
        'html/cert.pem'
    ),
};


const server = https.createServer(requestListener);
server.listen(8080, () => {
    console.log(`Server is running on http://______:8080`);
})

//Сохранение ошибок
function ConsoleError(err){
    if (err == null) return
    let a = new Date(Number(Date.now())) 
    let message = a.toISOString()+':  '+err.toString()+'\n'
    console.error(a.toISOString())
    console.error(err)
    fs.appendFileSync('logs.txt',message)
}

//Сохранение БД
function SaveDB(hash,res){
    // res.writeHead(200, {'Content-Type': 'text/html'})
    let sql =`SELECT ID_role FROM users WHERE hash = ?`
    db.get(sql, [hash], (err, row) => {
		if (err) {ConsoleError(err)}
        if (row.ID_role == 1){
            // db.close()
            fs.readFile('todo.db', function (error, data) {
                if (error) {
                    res.statusCode = 404;
                    res.end('Resourse not found!');
                } else {
                    res.end(data);
                    return
                }
            })
        }
        // res.end('Error'); 
        // return;
    })
}


//Загрузка БД
function LoadDB(hash,req,res){
   let sql =`SELECT ID_role FROM users WHERE hash = ?`
    db.get(sql, [hash], (err, row) => {
		if (err) {ConsoleError(err)}
        if (row.ID_role == 1){
            db.close()
            const dest = fs.createWriteStream(`./taskfiles/todo.db`);
            req.pipe(dest);
            res.end('OK')
            db = new sqlite3.Database('./taskfiles/todo.db');
            return
        }
        res.end('Error'); 
        return;
    })
}
