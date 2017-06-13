/**
 * Created by Administrator on 2017/4/18.
 */
/**为元素增加类属性 */
function addClass(elements, value)
{
    if (!elements.className) {
        elements.className = value;
    }
    else
    {
        newClass = elements.className;
        newClass += " ";
        newClass += value;
        elements.className = newClass;
    }
}

/**获取根据参数名url的参数*/

function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};
