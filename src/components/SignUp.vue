<script>
export default {
    data() {
        return {
            account: [],
            ac: "",
            pw: "",
            repw: "",

        }
    },
    methods: {
        signUp() {
            if (this.check() && this.checkEmail()) {
                this.add();
                alert("註冊成功!");
                this.$router.push('/ExpenseTracker');
                return;
            }
            alert("註冊失敗!");
        },
        add() {
            this.account.push({
                ac: this.ac,
                pw: this.pw
            });
            this.write();
        },
        read() {
            if (localStorage.getItem("acc") == null) {
                localStorage.setItem("acc", JSON.stringify(this.account));
                return;
            }
            this.account = JSON.parse(localStorage.getItem("acc"));
        },
        write() {
            localStorage.setItem("acc", JSON.stringify(this.account));
        },
        check() {
            if (this.ac != "" &&
                this.pw != "" &&
                this.repw != "" &&
                this.pw == this.repw) {
                return true;
            }
            return false;
        },
        checkEmail() {
            for (let i = 0; i < this.account.length; i++) {
                if (this.account[i].ac == this.ac)
                    return false;
            }
            return true;
        }
    },
    mounted(){
        this.read();
    }
}
</script>

<template>
    <div class="signCon">
        <div class="content">
            <h1>Sign Up</h1>
            <div class="input">
                <label for="">Account</label>
                <input type="text" v-model="ac">
            </div>
            <div class="input">
                <label for="">Password</label>
                <input type="text" v-model="pw">
            </div>
            <div class="input">
                <label for="">Repeat Password</label>
                <input type="text" v-model="repw">
            </div>
            <div class="btnArea">
                <RouterLink to="/ExpenseTracker/Login">
                    <button type="button">Cancel</button>
                </RouterLink>
                <button type="button" @click="signUp()">Sign up</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.signCon {
    min-width: 1200px;
    min-height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        width: 300px;
        height: 350px;
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
}
</style>