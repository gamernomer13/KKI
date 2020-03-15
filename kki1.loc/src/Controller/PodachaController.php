<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class PodachaController extends AbstractController
{
    /**
     * @Route("/lucky/number/podcha")
     */
    public function number(): Response
    {
        return $this->render('podcha.html.twig');
    }
}
