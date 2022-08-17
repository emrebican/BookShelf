import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import "../css/App.css";

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function MediaIcons() {
    return (
        <Box>

            <motion.div
                className='wrapper'
                whileHover={{ scale: 1.2, rotate: 90 }}
            >
                {/* eslint-disable-next-line */}
                <a href="https://github.com/emrebican" target="_blank">
                    <motion.div
                        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                    >
                        <GitHubIcon />
                    </motion.div>
                </a>
                {/* eslint-disable-next-line */}
                <a href="https://www.linkedin.com/in/yunus-emre-37179320a/" target="_blank">
                    <motion.div
                        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                    >
                        <LinkedInIcon />
                    </motion.div>
                </a>
                <motion.div
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
                    <FacebookIcon
                        href="#"
                    />
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
                    <TwitterIcon
                        href="#"
                    />
                </motion.div>
            </motion.div>
        </Box>
    )
}

export default MediaIcons