<script>
    import inputBlock from "../../components/TsaInput.vue";
    import tsInfoBlock from "../../components/TsaInfo.vue";
    export default{
        data(){
            return{
                list: null,
                listLoading: true,
                totalPage: 1,
                currentPage: 1,
                pageSize: 5,
                currentPageData: [],
                headPage: 1,
                user:"User",
                inputShow:false,
                info:[],
                money:{
                    income:0,
                    expense:0
                },
                balance:0,
                testArr:[],
                index:-1,
            }
        },
        methods:{
            read(){
                if(localStorage.getItem("testA") == null){
                    localStorage.setItem("testA", JSON.stringify(this.testArr));
                    return;
                }
                this.testArr = JSON.parse(localStorage.getItem("testA"));
            },
            who(){ 
                this.user = JSON.parse(localStorage.getItem("user"));
                for(let i=0; i < this.testArr.length; i++){
                    if(this.user == this.testArr[i].user){
                        this.index = i;
                        return;
                    }
                }
                this.testArr.push({
                    "user":this.user,
                    "info":this.info,
                    "money":this.money,
                });
                this.index = this.testArr.length - 1;
            },
            get(){
                this.info = this.testArr[this.index].info;
                this.money = this.testArr[this.index].money;
            },
            showInput(){
                this.inputShow = !this.inputShow;
            },
            add(tsinput){
                if(typeof(tsinput.cost)!='number'){
                    alert("invalid input");
                    return;
                }
                this.info.unshift( {...tsinput});
                if(tsinput.cost>=0){
                    this.money.income = this.money.income + tsinput.cost;}
                else if(tsinput.cost<0){
                    this.money.expense = this.money.expense + tsinput.cost;}
                this.balance = this.money.income + this.money.expense;
                this.write();
            },
            del(a){
                if(a.cost>=0){
                    this.money.income = this.money.income - a.cost;}
                else if(a.cost<0){
                    this.money.expense = this.money.expense - a.cost;}
                this.balance = this.money.income + this.money.expense;
                this.info.splice(this.info.indexOf(a), 1);
                this.write();
            },
            write(){
                this.testArr[this.index].info = this.info;
                this.testArr[this.index].money = this.money;
                localStorage.setItem("testA", JSON.stringify(this.testArr));
            },
            getCurrentPageData(){
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.info.slice(
                    begin,
                    end
                );
            },
            prevPage(){
                if(this.currentPage == 1){
                    return false;
                }else{
                    this.currentPage --;
                    this.getCurrentPageData();
                }
            },
            nextPage(){
                if(this.currentPage == this.totalPage){
                    return false;
                }else{
                    this.currentPage ++;
                    this.getCurrentPageData();
                }
            },
            lastPage(){
                if(this.currentPage == this.totalPage){
                    return false;
                }else{
                    this.currentPage = this.totalPage;
                    this.getCurrentPageData();
                }
            },
            firstPage(){
                this.currentPage = this.headPage;
                this.getCurrentPageData();
            }
        },
        mounted(){
            this.read();
            this.who();
            this.get();
            this.balance = this.money.income + this.money.expense;
        },
        watch: {
            info: function(newValue, oldValue) {
                this.totalPage = Math.ceil(this.info.length / this.pageSize);
                this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                this.getCurrentPageData();
            }
        },
        components:{
            inputBlock,
            tsInfoBlock,
        }
    }
</script>

<template>
        <inputBlock v-show="inputShow" @add="add" @close="showInput()" style="z-index: 1; "  />
        <div class="con" style="z-index: -1; position: absolute;">
            <div class="left">
                <p class="p1">Expense Tracker</p>
                <p class="p2">{{ user }}</p>
                <p class="p3">YOUR BALANCE</p>
                <p class="p4">$ {{ balance }}</p>
            </div>
            <div class="right">
                <div class="rTop">
                    <div class="incomeArea">
                        <p class="incomeText1 incomeText">INCOME</p>
                        <p class="incomeText2 incomeText">$ {{ this.money.income }}</p>
                    </div>
                    <div class="expenseArea">
                        <p class="expenseText1 expenseText">EXPENSE</p>
                        <p class="expenseText2 expenseText">$ {{ this.money.expense }}</p>
                    </div>
                </div>
                <div class="btnArea">
                    <button type="button" @click="showInput()">Add transaction</button>
                </div>
                <div class="rBot">
                    <!-- {{ info }} -->
                    <tsInfoBlock :text="a.text" :cost="a.cost" v-for="a in info" @del="del(a)"/>
                </div>
                <input type="button" value="首頁" @click="firstPage()">
                <input type="button" value="上一頁" @click="prevPage()">
                <input type="button" value="下一頁" @click="nextPage()">
                <input type="button" value="尾頁" @click="lastPage()">
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .con{
        min-width: 1200px;
        width: 100%;
        min-height: 100%;
        // height: 100%;
        display: flex;
        background-color: rgb(113, 192, 252);
        .left{
            // background-color: rgb(113, 192, 252);
            width: 30%;
            // min-height: 750px;
            // min-height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            p{
                color: white;
                font-size: 20pt;
            }

            .p1{
                position: absolute;
                top: 150px;
                
            }
            .p2{
                position: absolute;
                top: 330px;
                
            }
            .p3{
                position: absolute;
                top: 380px;
            }
            .p4{
                position: absolute;
                top: 420px;
            }
        }
        .right{
            width: 70%;
            min-height: 750px;
            background-color: white;
            .rTop{
                width: 100%;
                height: 300px;
                display: flex;
                .incomeArea{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .incomeText{
                        color: rgb(137, 196, 137);
                        font-size: 20pt;
                    }
                }
                .expenseArea{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .expenseText{
                        color: rgb(228, 90, 90);
                        font-size: 20pt;
                    }
                }
            }
            .btnArea{
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    width: 150px;
                    height: 50px;
                    background-color: rgb(113, 192, 252);
                    color: white;
                    border: 0;
                    border-radius: 6px;
                }
            }
            .rBot{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
</style>