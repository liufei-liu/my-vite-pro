import { ElMessage } from 'element-plus'

export default{
    success(msg){
        this._showMsg(msg, 'success');
    },

    error(msg){
        this._showMsg(msg, 'error');
    },

    warning(msg){
        this._showMsg(msg, "warning");
    },
    info(msg){
        this._showMsg(msg, "info");
    },
    _showMsg(msg, msgType){
        var func;
        switch(msgType){
            case 'error':
                func = ElMessage.error;
                break;
            case 'success':
                func = ElMessage.success;
                break;
            case 'warning':
                func = ElMessage.warning;
                break;
            default:
                func = ElMessage.info;
        }
        // 3s后自动退出 之前测试提出过不需要提示自动退出时间
        var obj = func({message: msg + '！ ', duration: 3000, showClose: true});
        //倒计时函数
        function countTime(index){
            setTimeout(function() {
                if(index > 0){
                    // + (index-1)+"s后自动退出"
                    document.querySelector(".el-message__content").innerHTML = msg+'！ '
                    countTime(--index);
                }
            }, 1000);            
        };
        countTime(3) ;
    }

}
