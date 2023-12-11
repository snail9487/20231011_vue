<script>
export default {
    data() {
        return{
            account:[],
            ac:"",
            pw:"",
        }
    },
    methods: {
        login() {
            for (let i = 0; i < this.account.length; i++) {
                if (this.ac == this.account[i].ac && this.pw == this.account[i].pw) {
                    localStorage.setItem("user", JSON.stringify(this.ac));
                    alert("success!");
                    this.$router.push('/ExpenseTracker/Home');
                    return;
                }
            }
            alert("XXX!");
            return;
        },
        read() {
            if(localStorage.getItem("acc") == null){
                return;
            }
            this.account = JSON.parse(localStorage.getItem("acc"));
        }
    },
    mounted(){
        this.read();
    }
}
</script>

<template>
    <div class="loginCon">
        <div class="content">
            <h1>Expense Tracker</h1>
            <div class="input">
                <label for="">Account</label>
                <input type="text" v-model="ac">
            </div>
            <div class="input">
                <label for="">Password</label>
                <input type="text" v-model="pw">
            </div>
            <div class="btnArea">
                <RouterLink to="/ExpenseTracker/SignUp">
                    <button type="button">Sign Up</button>
                </RouterLink>
                <button type="button" @click="login() ">Login</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loginCon {
    min-width: 1200px;
    min-height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .input {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .btnArea {
            button {
                margin: 5px;
            }
        }
    }
}</style>