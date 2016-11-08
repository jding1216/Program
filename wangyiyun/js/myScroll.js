/**
 * Created by huang on 16/8/16.
 */
function scroll() {
    if(window.pageYOffset != null)
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}