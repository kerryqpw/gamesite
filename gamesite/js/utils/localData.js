/**
 * Created by Administrator on 2017/5/9.
 */

function localSetItem(key,value) {
    localStorage.setItem(key,value);
}

function localgetItem(key) {
   return localStorage.getItem(key);
}

function remove(key) {
    localStorage.removeItem(key);
}

function clear() {
    localStorage.clear();
}