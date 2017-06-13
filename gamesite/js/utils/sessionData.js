/**
 * Created by Administrator on 2017/5/9.
 */
function sessionSetItem(key,value) {
    sessionStorage.setItem(key,value);
}

function sessiongetItem(key) {
   return  sessionStorage.getItem(key);
}

function sessionremove(key) {
    sessionStorage.removeItem(key);
}

function sessionclear() {
    sessionStorage.clear();
}