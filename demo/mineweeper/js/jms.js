/**
 * Created by admin on 2016/4/18.
 */
//��jms.js��
(function () {
    var JMS = function (id,rowCount,colCount, minLandMineCount, maxLandMineCount) {
        if (!(this instanceof JMS))
            return new JMS(id, rowCount, colCount, minLandMineCount, maxLandMineCount);
        this.doc = document;
        this.table = this.doc.getElementById(id);//�����ӵı��
        this.cells = this.table.getElementsByTagName("td");//С����
        this.rowCount = rowCount || 10;//��������
        this.colCount = colCount || 10;//��������
        this.landMineCount = 0;//���׸���
        this.markLandMineCount = 0;//��ǵĵ��׸���
        this.minLandMineCount = minLandMineCount || 10;//�������ٸ���
        this.maxLandMineCount = maxLandMineCount || 20;//����������
        this.arrs = [];//���Ӷ�Ӧ������
        this.beginTime = null;//��Ϸ��ʼʱ��
        this.endTime = null;//��Ϸ����ʱ��
        this.currentSetpCount = 0;//��ǰ�ߵĲ���
        this.endCallBack = null;//��Ϸ����ʱ�Ļص�����
        this.landMineCallBack = null;//���Ϊ����ʱ����ʣ����׸����Ļص�����
        this.doc.oncontextmenu = function () {//�����Ҽ��˵�
            return false;
        };
        this.drawMap();
    };

    JMS.prototype = {
        //������
        drawMap: function () {
            var tds = [];
            if (window.ActiveXObject && parseInt(navigator.userAgent.match(/msie ([\d.]+)/i)[1]) < 8) {
                var css = '#JMS_main table td{background-color:#888;}',
                    head = this.doc.getElementsByTagName("head")[0],
                    style = this.doc.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(this.doc.createTextNode(css));
                }
                head.appendChild(style);
            }
            for (var i = 0; i < this.rowCount; i++) {
                tds.push("<tr>");
                for (var j = 0; j < this.colCount; j++) {
                    tds.push("<td id='m_" + i + "_" + j + "'></td>");
                }
                tds.push("</td>");
            }
            this.setTableInnerHTML(this.table, tds.join(""));
        },
        //���HTML��Table
        setTableInnerHTML: function (table, html) {
            if (navigator && navigator.userAgent.match(/msie/i)) {
                var temp = table.ownerDocument.createElement('div');
                temp.innerHTML = '<table><tbody>' + html + '</tbody></table>';
                if (table.tBodies.length == 0) {
                    var tbody = document.createElement("tbody");
                    table.appendChild(tbody);
                }
                table.replaceChild(temp.firstChild.firstChild, table.tBodies[0]);
            } else {
                table.innerHTML = html;
            }
        }
    };

    window.JMS = JMS;
})();