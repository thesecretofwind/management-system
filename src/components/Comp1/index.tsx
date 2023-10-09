
// import './Comp1.module.scss' // 这个会变成全局引入，该scss文件夹的类会作用域全局，造成样式未隔离的相互影响

import styles from './Comp1.module.scss'
function Comp1() {
  return <div className={styles.box}>这里是Comp1的内容</div>;
}

export default Comp1
