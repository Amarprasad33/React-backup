import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal =  <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal  && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim ex, dapibus aliquam tempus porta, volutpat sed elit. Duis dictum purus velit, nec sagittis neque faucibus a. Nam eros tellus, efficitur in faucibus vitae, convallis at justo. Cras ac quam ac diam scelerisque commodo. In et elementum elit. Praesent lacinia, elit sit amet dapibus aliquet, dolor odio efficitur purus, a mollis eros velit et risus. Curabitur eu ipsum et odio malesuada egestas sit amet eleifend massa. Sed euismod condimentum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis aliquet lorem. Aliquam id augue nisl. Praesent eget pretium metus, non eleifend nibh. Donec suscipit et leo lobortis ullamcorper. Pellentesque a tellus urna.

            Morbi auctor ipsum lorem, sit amet egestas dolor lacinia ac. Ut tempus euismod ligula et facilisis. Aenean quis tristique odio. In quam quam, condimentum eget dui a, pretium elementum dui. Nullam dignissim aliquam bibendum. Donec a consectetur ex, eget eleifend lorem. Vivamus efficitur turpis erat. Suspendisse sed iaculis nibh. In hac habitasse platea dictumst.

            Vivamus sit amet egestas magna. Vivamus semper pretium ligula eget sagittis. Vestibulum scelerisque tempor urna facilisis euismod. Phasellus dapibus odio at facilisis convallis. Nulla felis lectus, pharetra suscipit lectus et, molestie venenatis velit. Sed sit amet urna sem. Ut finibus laoreet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget tortor pharetra, aliquet libero eget, pretium nunc. Donec facilisis eu diam quis ultrices. Pellentesque gravida feugiat elit, nec fermentum metus feugiat sed. Curabitur vitae est nec erat commodo volutpat eget id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean pharetra, neque vel maximus rhoncus, lacus tortor mattis orci, eget aliquam dui libero tristique est.

            Suspendisse luctus pulvinar felis, et egestas velit lobortis eu. Donec non molestie mauris, sit amet porttitor massa. Fusce erat lacus, feugiat at pulvinar in, pellentesque id ligula. Pellentesque sit amet lectus ut metus elementum interdum vitae ullamcorper nibh. Maecenas felis purus, condimentum ac fermentum semper, ultricies vel enim. Ut ut mi eros. Curabitur eu ultrices lacus. Nam nec ornare dui. Nam egestas urna placerat ultricies tincidunt. Phasellus rhoncus nulla vel ex ornare laoreet. Proin ex eros, faucibus id maximus quis, aliquet mollis dolor. Quisque tempor quam id mi semper, in imperdiet est ullamcorper. Donec condimentum elit a eros dapibus viverra sit amet ut tortor. Curabitur porttitor metus non erat consectetur, et luctus nibh semper.

            Phasellus luctus rhoncus sem. Vivamus ut venenatis lectus. Ut congue est non consequat vestibulum. Pellentesque volutpat erat vel magna tristique fringilla. Integer efficitur faucibus sem, ut lobortis dui auctor quis. Donec sodales viverra sem. Nullam ultrices malesuada quam, et euismod purus semper a. Curabitur sit amet congue sapien. Nulla facilisi. Suspendisse maximus est a ipsum aliquam hendrerit. Phasellus laoreet est sed neque dapibus, eget ultrices neque efficitur. Ut placerat dolor sed massa pulvinar, non volutpat massa bibendum. Phasellus volutpat elementum eleifend. Morbi bibendum tortor nec libero bibendum elementum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim ex, dapibus aliquam tempus porta, volutpat sed elit. Duis dictum purus velit, nec sagittis neque faucibus a. Nam eros tellus, efficitur in faucibus vitae, convallis at justo. Cras ac quam ac diam scelerisque commodo. In et elementum elit. Praesent lacinia, elit sit amet dapibus aliquet, dolor odio efficitur purus, a mollis eros velit et risus. Curabitur eu ipsum et odio malesuada egestas sit amet eleifend massa. Sed euismod condimentum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis aliquet lorem. Aliquam id augue nisl. Praesent eget pretium metus, non eleifend nibh. Donec suscipit et leo lobortis ullamcorper. Pellentesque a tellus urna.

            Morbi auctor ipsum lorem, sit amet egestas dolor lacinia ac. Ut tempus euismod ligula et facilisis. Aenean quis tristique odio. In quam quam, condimentum eget dui a, pretium elementum dui. Nullam dignissim aliquam bibendum. Donec a consectetur ex, eget eleifend lorem. Vivamus efficitur turpis erat. Suspendisse sed iaculis nibh. In hac habitasse platea dictumst.

            Vivamus sit amet egestas magna. Vivamus semper pretium ligula eget sagittis. Vestibulum scelerisque tempor urna facilisis euismod. Phasellus dapibus odio at facilisis convallis. Nulla felis lectus, pharetra suscipit lectus et, molestie venenatis velit. Sed sit amet urna sem. Ut finibus laoreet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget tortor pharetra, aliquet libero eget, pretium nunc. Donec facilisis eu diam quis ultrices. Pellentesque gravida feugiat elit, nec fermentum metus feugiat sed. Curabitur vitae est nec erat commodo volutpat eget id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean pharetra, neque vel maximus rhoncus, lacus tortor mattis orci, eget aliquam dui libero tristique est.

            Suspendisse luctus pulvinar felis, et egestas velit lobortis eu. Donec non molestie mauris, sit amet porttitor massa. Fusce erat lacus, feugiat at pulvinar in, pellentesque id ligula. Pellentesque sit amet lectus ut metus elementum interdum vitae ullamcorper nibh. Maecenas felis purus, condimentum ac fermentum semper, ultricies vel enim. Ut ut mi eros. Curabitur eu ultrices lacus. Nam nec ornare dui. Nam egestas urna placerat ultricies tincidunt. Phasellus rhoncus nulla vel ex ornare laoreet. Proin ex eros, faucibus id maximus quis, aliquet mollis dolor. Quisque tempor quam id mi semper, in imperdiet est ullamcorper. Donec condimentum elit a eros dapibus viverra sit amet ut tortor. Curabitur porttitor metus non erat consectetur, et luctus nibh semper.

            Phasellus luctus rhoncus sem. Vivamus ut venenatis lectus. Ut congue est non consequat vestibulum. Pellentesque volutpat erat vel magna tristique fringilla. Integer efficitur faucibus sem, ut lobortis dui auctor quis. Donec sodales viverra sem. Nullam ultrices malesuada quam, et euismod purus semper a. Curabitur sit amet congue sapien. Nulla facilisi. Suspendisse maximus est a ipsum aliquam hendrerit. Phasellus laoreet est sed neque dapibus, eget ultrices neque efficitur. Ut placerat dolor sed massa pulvinar, non volutpat massa bibendum. Phasellus volutpat elementum eleifend. Morbi bibendum tortor nec libero bibendum elementum.
            </p>
        </div>
    );
}

export default ModalPage;