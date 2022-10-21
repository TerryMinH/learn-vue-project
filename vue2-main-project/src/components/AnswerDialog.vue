<!--
 * @Author: TerryMin
 * @Date: 2021-12-11 15:17:47
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-18 18:08:10
 * @Description: https://www.cnblogs.com/amor17/p/10157313.html
-->
<template>
  <div class="ex_dialog" v-if="isShowModal">
    <div class="ex_dialog-content">
      <div class="confirm_dialog-wrapper">
        <div class="confirm_dialog">
          <div class="tip">
            <p class="tip_title">是否要继续上次答题？</p>
          </div>
          <div class="btns">
            <div class="cancel_btn" @click.stop="closeModal('restart')">
              重新开始
            </div>
            <div class="recharge_btn" @click.stop="closeModal('next')">
              继续答题
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerDialog",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    isShowModal: function () {
      return this.isShow;
    },
  },

  mounted() {
    console.log(91, this);
  },
  methods: {
    closeModal(type) {
      this.$emit("onClose", type);
    },
    // goStart() {
    // 	this.dialogOpen = false;
    // 	Bus.$emit('isNewStart', true);
    // },
    // goTo() {
    // 	this.dialogOpen = false;
    // 	if (this.bool === 1) {
    // 		Bus.$emit('isNewStart', false);
    // 	}
    // }
  },
};
</script>

<style lang="less" scoped>
.ex_dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  .ex_dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.confirm_dialog-wrapper {
  width: 6rem;
  // height:2.72rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem;
  .confirm_dialog {
    padding-top: 0.4rem;
    .tip {
      .tip_title {
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.3rem;
        font-weight: 700;
        text-align: center;
        color: rgba(51, 51, 51, 1);
        padding-bottom: 80px;
      }
      .tip_use,
      .tip_have {
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.28rem;
        text-align: center;
        font-weight: 400;
        color: rgba(108, 108, 108, 1);
        .amount {
          margin: 0 0.03rem;
          color: rgba(255, 98, 62, 1);
        }
      }
      .tip_use {
        margin-top: 0.32rem;
      }
      .tip_have {
        margin-top: 0.12rem;
        margin-bottom: 0.32rem;
      }
    }
    .btns {
      height: 1.24rem;
      padding: 0.28rem 0.68rem;
      font-size: 0;
      box-shadow: 0 -0.02rem 0.1rem 0 rgba(78, 82, 101, 0.1);
      .cancel_btn,
      .recharge_btn {
        display: inline-block;
        width: 2.14rem;
        height: 0.68rem;
        line-height: 0.68rem;
        font-size: 0.3rem;
        text-align: center;
      }
      .cancel_btn {
        color: rgba(51, 51, 51, 1);
        background: rgba(239, 243, 247, 1);
        border-radius: 0.4rem;
      }
      .recharge_btn {
        margin-left: 0.28rem;
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(
          42deg,
          rgba(246, 218, 164, 1) 0%,
          rgba(211, 168, 91, 1) 100%
        );
        border-radius: 40px;
      }
    }
  }
}
</style>
