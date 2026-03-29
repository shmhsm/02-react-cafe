import css from "./CafeInfo.module.css";

const CafeInfo = () => {
    return (
        <div className={css.contsiner}>
            <h1 className={css.title}>Sip Happens Café</h1>
            <p className={css.description}>
                Please rate our service by selecting one of the optiobs below.
            </p>
        </div>
    );
};

export default CafeInfo;